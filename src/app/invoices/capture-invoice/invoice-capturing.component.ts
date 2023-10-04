import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {faArrowDown, faArrowUp, faEdit, faRemove} from '@fortawesome/free-solid-svg-icons';
import {InvoiceService} from "../../invoice.service";
import {ClientInvoiceConfig} from "../../Models/invoice-config";
import {SalesInvoice, SalesInvoiceHeader, SalesInvoiceLine} from "../../Models/sales-invoice";
import {DatePipe} from "@angular/common";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-invoice-capturing',
  templateUrl: './invoice-capturing.component.html',
  styleUrls: ['./invoice-capturing.component.scss'],
  providers: [DatePipe]
})
export class InvoiceCapturingComponent implements  OnInit{
  // Font Awesome icons
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  faEdit = faEdit;
  faRemove = faRemove;

  // Invoice data
  invoiceNumber = "";
  invoiceLines: InvoiceLine[] = [];
  invoiceForm: FormGroup;
  clients: ClientInvoiceConfig[] = [];
  selectedClient?: ClientInvoiceConfig;
  invoiceDate: Date;

  @Input() invoiceData: SalesInvoice | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<InvoiceCapturingComponent>,
    private datePipe: DatePipe,
    private invoiceService: InvoiceService
  ) {
    // Initialize the invoice date with the current date
    this.invoiceDate = new Date();

    // Initialize the invoice form
    this.invoiceForm = this.formBuilder.group({
      description: ['', Validators.required],
      qty: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      unitPrice: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      total: [0]
    });

    this.invoiceForm.get('qty')!.valueChanges.subscribe(() => {
      this.calculateTotal();
    });

    this.invoiceForm.get('unitPrice')!.valueChanges.subscribe(() => {
      this.calculateTotal();
    });

    this.invoiceService.findInvoiceConfiguration().subscribe({
      next: (clients) => {
        this.clients = clients;
        this.populateFromInvoiceData();
      }
    });
  }

  ngOnInit(): void {
    if (this.invoiceData) {
      this.populateFromInvoiceData();
    }
  }
  // Computed property to get the invoice total
  public get invoiceTotal() {
    return this.invoiceLines.reduce((total, line) => total + line.total, 0);
  }

  // Computed property to get the total units in the invoice
  public get invoiceUnits() {
    return this.invoiceLines.reduce((total, line) => total + +line.qty, 0);
  }

  // Build the Sales Invoice object
  buildSalesInvoice() {
    const header = {
      invoiceAmount: this.invoiceTotal,
      totalDuration: this.invoiceUnits,
      invoiceDate: this.datePipe.transform(this.invoiceDate, 'yyyy-MM-dd', 'en-US'),
      dueDate: this.datePipe.transform(this.invoiceDate, 'yyyy-MM-dd', 'en-US'),
      chargeRate: this.selectedClient?.rate,
      clientName: this.selectedClient?.clientName,
      clientEmail: this.selectedClient?.clientEmail,
      configurationId: this.selectedClient?.configurationId
    } as SalesInvoiceHeader;

    const lines = this.invoiceLines.map((l, index) => {
      return {
        lineNo: index + 1,
        unitPrice: +l.unitPrice,
        amount: l.total,
        duration: l.qty,
        quantity: l.qty,
        description: l.description,
      } as SalesInvoiceLine;
    });

    return {
      header,
      lines
    } as SalesInvoice;
  }

  // Save the invoice
  public saveInvoice() {
    const invoice = this.buildSalesInvoice();
    this.invoiceService.saveInvoice(invoice).subscribe({
      next: () => {
        this.dialogRef.close("OK");
      },
      error: () => {
        // Handle error
      },
    });
  }

  private populateFromInvoiceData() {
    if (this.invoiceData) {
      this.invoiceDate = new Date(this.invoiceData.header.invoiceDate);
      this.selectedClient = this.clients.find(client => client.configurationId === +this.invoiceData!.header.configurationId);
      // Populate invoice lines
      this.invoiceLines = this.invoiceData.lines.map((line) => {
        return {
          description: line.description,
          qty: line.duration,
          unitPrice: line.unitPrice || this.invoiceData!.header.chargeRate,
          total: line.amount,
        } as InvoiceLine;
      });
    }
  }


// Calculate the total amount for the invoice line
  calculateTotal() {
    const quantity = this.invoiceForm.get('qty')!.value;
    const unitPrice = this.invoiceForm.get('unitPrice')!.value;
    const total = quantity * unitPrice;
    this.invoiceForm.get('total')!.setValue(total);
  }

  // Add an invoice line
  addInvoiceLine() {
    const inv = {...this.invoiceForm.value} as InvoiceLine;
    this.invoiceLines.push(inv);
    this.invoiceForm.reset();
    if (this.selectedClient) {
      this.invoiceForm.patchValue({unitPrice: this.selectedClient.rate});
    }
  }

  // Handle client selection change
  clientSelectionChanged($event: Event) {
    if (this.selectedClient) {
      this.invoiceForm.patchValue({unitPrice: this.selectedClient.rate});
    }
  }
}

// Define an interface for an invoice line
interface InvoiceLine {
  description: string;
  qty: number;
  unitPrice: number;
  total: number;
}
