import {Component, OnInit} from '@angular/core';
import {TrelloObject} from "./trello-object";
import {TrelloService} from "./trello.service";
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn
} from "@angular/forms";
import {InvoiceService} from "../../invoice.service";
import {ClientInvoiceConfig} from "../../Models/invoice-config";
import {SalesInvoice, SalesInvoiceLine} from "../../Models/sales-invoice";


/**
 * Validates the selected quantity and duration form controls.
 *
 * @param {AbstractControl} control - The form control to validate.
 * @returns {ValidationErrors | null} Returns a validation error object if the validation fails, otherwise null.
 */
export const selectedQtyValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const selected = control.get('selected');
  const qtyDuration = control.get('qtyDuration');

  if (!selected || !qtyDuration) return null;

  if (selected.value && (!qtyDuration.value || qtyDuration.value < 2)) {
    return {'qtyRequired': true};
  }
  return null;
};

@Component({
  selector: 'trello-task-selector',
  templateUrl: `trello-task-selector.component.html`,
  styleUrls: ['trello-task-selector.component.scss']
})
export class TrelloTaskSelectorComponent implements OnInit {
  invoiceConfigs: ClientInvoiceConfig[] = [];
  selectedClient?: ClientInvoiceConfig;
  trelloCardsForm: FormGroup;
  taskSelectorSteps = [
    {name: 'Select Board', active: true},
    {name: 'Select Swim Lane', active: false},
    {name: 'Select Select Card', active: false}
  ]
  trelloBoards: TrelloObject[] = [];
  selectedTrelloBoard?: TrelloObject;
  trelloSwimLanes: TrelloObject[] = [];
  selectedTrelloSwimLane?: TrelloObject;
  trelloCards: TrelloObject[] = [];

  constructor(private trelloService: TrelloService, private invoiceService: InvoiceService, private fb: FormBuilder) {
    this.trelloCardsForm = this.fb.group({
      cards: this.fb.array([])
    });
  }

  ngOnInit() {
    this.fetchBoards();
    this.fetchClientConfiguration();
  }

  /**
   * Create form group for each TrelloCard and add it to FormArray('cards') in trelloCardsForm.
   */
  private buildForm(): void {
    this.formArrayClear();
    this.trelloCards.forEach(card => this.addCardToFormArray(card));
  }


  /**
   * Executes when the board selection is changed.
   *
   * @param {any} $event - The event object for board selection change.
   *
   * @return {void} - This method does not return anything.
   */
  public boardSelectionChanged($event: any): void {
    this.clearSelectedItemsOnBoardChanged();
    if (this.selectedTrelloBoard) {
      this.fetchSwimLanes();
    }
  }

  /**
   * Perform actions when swim lane selection is changed.
   *
   * @param $event - The event object representing the swim lane selection change.
   *
   * @return {void}
   */
  public swimLaneSelectionChanged($event: any): void {
    this.clearSelectedItemsOnSwimLaneChanged();
    if (this.selectedTrelloSwimLane) {
      this.fetchCards();
    }
  }

  /**
   * Checks if the specified error exists in the form group at the given index.
   *
   * @param {number} i - The index of the form group.
   * @param {string} error - The error to check.
   * @returns {boolean} - True if the error exists, false otherwise.
   */
  public hasError(i: number, error: string): boolean {
    const formGroup = this.formGroupAt(i);
    return formGroup.hasError(error);
  }

  /**
   * Returns the FormGroup at the specified index from the formArrayCards.
   *
   * @param {number} i - The index of the FormGroup to retrieve.
   *
   * @return {FormGroup} The FormGroup at the specified index.
   */
  public formGroupAt(i: number): FormGroup {
    return this.formArrayCards.at(i) as FormGroup;
  }

  /**
   * Calculates the total selected quantity duration.
   *
   * @returns {number} The total selected quantity duration.
   */
  public get totalSelectedQtyDuration(): number {
    let total = 0;
    const cards = this.trelloCardsForm.get('cards') as FormArray;
    cards.controls.forEach(control => {
      if (control?.get('selected')?.value) {
        total += +(control?.get('qtyDuration')?.value) || 0;
      }
    });

    return total;
  }

  public generateTrelloBasedDraftSalesInvoice(): void {
    const invoice: SalesInvoice = {
      id: '',
      header: {
        __typename: '',
        totalDuration: 0,
        invoiceNumber: '',
        dueDate: '',
        invoiceDate: '',
        status: 'DRAFT',
        chargeRate: this.selectedClient!.rate,
        configurationId: this.selectedClient!.configurationId,
        clientEmail: this.selectedClient!.clientEmail,
        clientName: this.selectedClient!.clientName,
        invoiceAmount: this.totalSelectedQtyDuration * this.selectedClient!.rate,
      },
      lines: []
    };

    const cardsFormArray = this.trelloCardsForm.get('cards') as FormArray;
    cardsFormArray.controls.filter(ctrl => ctrl.get('selected')?.value)
      .forEach(control => {
        const cardId = control?.get('id')?.value;
        const dtyDuration = control?.get('qtyDuration')?.value;
        const card = this.trelloCards.find(c => c.id === cardId);
        if (card) {
          invoice.lines.push({
            invoiceNumber: '',
            description: card.name,
            duration: dtyDuration,
            quantity: dtyDuration,
            amount: dtyDuration * this.selectedClient!.rate,
            unitPrice: this.selectedClient!.rate,
            lineNo: 0,
          } as SalesInvoiceLine)
        }
      });

    console.log("Invoice", invoice);
  }

  private fetchBoards() {
    this.trelloService.getBoards().subscribe(boards => {
      this.trelloBoards = boards;
    });
  }

  private fetchCards() {
    this.trelloService.getCards(this.selectedTrelloSwimLane!.id).subscribe(cards => {
      this.trelloCards = cards;
      this.buildForm();
      this.updateStepActivity(2, cards.length > 0);
    });
  }

  /**
   * Adds a card to the form array.
   *
   * @param card - The card object to add.
   *
   * @return - None.
   */
  private addCardToFormArray(card: any) {
    const formGroup = this.fb.group({
      id: [card.id],
      selected: new FormControl<boolean>(false),
      qtyDuration: new FormControl<number>(0),
    }, {validator: selectedQtyValidator});

    this.formArrayCards.push(formGroup);
  }

  private clearSelectedItemsOnBoardChanged() {
    this.trelloSwimLanes = [];
    this.updateStepActivity(1, false);
  }

  /**
   * Clears the FormArray named 'cards' in the trelloCardsForm.
   * @private
   *
   * @returns {void}
   */
  private formArrayClear() {
    const formArray = this.trelloCardsForm.get('cards') as FormArray;
    formArray.clear();
  }


  /**
   * Clears the selected items on swim lane change.
   *
   * @memberof ClassName
   * @private
   *
   * @returns {void}
   */
  private clearSelectedItemsOnSwimLaneChanged(): void {
    this.trelloCards = [];
    this.updateStepActivity(2, false);
  }

  /**
   * Fetches the swimlanes of the selected Trello board.
   *
   * @private
   * @method fetchSwimLanes
   * @returns {void}
   */
  private fetchSwimLanes() {
    this.trelloService.getSwimLanes(this.selectedTrelloBoard!.id).subscribe(swimLanes => {
      this.trelloSwimLanes = swimLanes;
      this.trelloCards = [];
      this.trelloCardsForm.reset();
      this.updateStepActivity(1, swimLanes.length > 0);
    });
  }

  private updateStepActivity(stepIndex: number, isActive: boolean) {
    this.taskSelectorSteps[stepIndex].active = isActive;
  }

  private get formArrayCards(): FormArray {
    return this.trelloCardsForm.get('cards') as FormArray;
  }

  private fetchClientConfiguration() {
    this.invoiceService.findInvoiceConfiguration().subscribe({
      next: (values) => {
        this.invoiceConfigs = values;
      }
    });
  }


}
