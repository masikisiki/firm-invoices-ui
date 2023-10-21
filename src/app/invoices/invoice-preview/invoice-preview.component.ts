import {Component, Input} from '@angular/core';
import {SalesInvoice} from "../../Models/sales-invoice";

@Component({
  selector: 'app-invoice-preview',
  templateUrl: './invoice-preview.component.html',
  styleUrls: ['./invoice-preview.component.scss']
})
export class InvoicePreviewComponent {

  @Input() salesInvoice?: SalesInvoice;

}
