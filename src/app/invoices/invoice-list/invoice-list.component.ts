import {Component} from '@angular/core';
import {InvoiceService} from "../../invoice.service";
import {DialogService} from "../../dialog.service";
import {SalesInvoice} from "../../Models/sales-invoice";

type  InvoiceSummary = {
  amount: number,
  dueDate: string,
  invoiceNumber: string,
  client: string,
  status: string
};

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent {

  public invoiceSummary: InvoiceSummary[] = [];
  public displayedColumns: string[] = ['invoiceNumber', 'amount', 'dueDate', 'client', 'status', 'actions'];
  private salesInvoices: SalesInvoice[] = [];

  constructor(private invoiceService: InvoiceService, private dialogService: DialogService) {
    this.invoiceService.fetchAllInvoice().subscribe({
      next: (data) => {
        this.salesInvoices = data;
        this.invoiceSummary = data.map(inv => {
          return {
            invoiceNumber: inv.header.invoiceNumber,
            amount: inv.header.invoiceAmount,
            dueDate: inv.header.invoiceDate,
            client: inv.header.clientName,
            status: inv.header.status
          }
        });
      }
    })
  }

  public launchInvoiceEdit(input: { invoiceNumber: string }): void {
    if (input.invoiceNumber) {
      const invoice = this.salesInvoices.find(x => x.header.invoiceNumber == input.invoiceNumber);
      if (invoice) {
        this.dialogService.launchInvoiceEditDialog(invoice);
      }
    }
  }
}
