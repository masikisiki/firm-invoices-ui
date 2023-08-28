import {Component, Inject} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SalesInvoice} from "../../Models/sales-invoice";

const invoiceLineData: InvoiceLineInput[] = [
  {
    lineNo: 1,
    description: 'Consultation',
    duration: 2,
    amount: 150
  },
  {
    lineNo: 2,
    description: 'Web Design',
    duration: 10,
    amount: 1200
  },
  {
    lineNo: 3,
    description: 'Development',
    duration: 15,
    amount: 1800
  },
  {
    lineNo: 4,
    description: 'Graphic Design',
    duration: 8,
    amount: 800
  },
  {
    lineNo: 5,
    description: 'Testing',
    duration: 5,
    amount: 500
  }
];

type  InvoiceLineInput = {
  lineNo: number,
  description: string,
  duration: number,
  amount: number
}

@Component({
  selector: 'app-capture-invoice',
  templateUrl: './capture-invoice.component.html',
  styleUrls: ['./capture-invoice.component.scss']
})
export class CaptureInvoiceComponent {
  invoiceForm: FormGroup;


  invoiceLineItems: InvoiceLineInput[] = invoiceLineData;
  lineInputForm = new FormGroup({
    lineNo: new FormControl<number>(0, []),
    description: new FormControl<string>('', []),
    duration: new FormControl<number>(0, []),
    amount: new FormControl<number>(0, []),
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: { salesInvoiceToEdit: SalesInvoice }, private fb: FormBuilder, public dialogRef: MatDialogRef<CaptureInvoiceComponent>) {
    this.invoiceForm = this.fb.group({
      invoiceLines: this.fb.array([])
    });
    if (data && data.salesInvoiceToEdit) {
      this.handleSalesInvoiceEdit(data.salesInvoiceToEdit);
    }
  }


  get invoiceLines() {
    return this.invoiceForm.get('invoiceLines') as FormArray;
  }

  saveLineAndReset() {
    const val = this.lineInputForm.value as InvoiceLineInput;
    if (val.lineNo === 0) {
      val.lineNo = this.invoiceLineItems.length + 1;
      this.buildAndInsertLine(val);
    }
    this.invoiceLineItems.push(val);
    this.lineInputForm.reset();
  }

  public get invoiceTotal() {
    const fmArr = this.invoiceForm.get('invoiceLines') as FormArray;
    const vales = fmArr.value as { total: number }[];
    if (vales) {
      return vales.map(x => x.total).reduce((prev, curr) => prev += curr, 0)
    }
    return 0;
  }

  buildAndInsertLine(line: InvoiceLineInput, chargeRate = 0) {
    const lineFb = this.fb.group({
      description: [line.description],
      duration: [line.duration],
      price: [chargeRate],
      total: [line.amount],
    });
    this.invoiceLines.push(lineFb);
  }

  addLesson() {
    const lessonForm = this.fb.group({
      description: [''],
      duration: [0],
      unitAmount: [0],
    });
    this.invoiceLines.push(lessonForm);
  }

  deleteLesson(lessonIndex: number) {
    this.invoiceLines.removeAt(lessonIndex);
  }

  formGroup(fg: any) {
    return fg as FormGroup<any>;
  }

  saveInvoice() {
    console.log("Value", this.invoiceLines.value);
  }

  private handleSalesInvoiceEdit(salesInvoiceToEdit: SalesInvoice) {
    const invLines = salesInvoiceToEdit.lines.map((x, index) => {
      return {
        lineNo: x.lineNo,
        description: x.description,
        amount: x.amount,
        duration: x.duration
      }
    });

    const invHeader = salesInvoiceToEdit.header;
    invLines.forEach(line => this.buildAndInsertLine(line, invHeader.chargeRate));
  }
}
