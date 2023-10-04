import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {InvoiceCapturingComponent} from "./invoices/capture-invoice/invoice-capturing.component";
import {SalesInvoice} from "./Models/sales-invoice";
import {InvoicePreviewComponent} from "./invoices/invoice-preview/invoice-preview.component";

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  public openNewInvoiceDialog() {
    this.dialog.open(InvoiceCapturingComponent, {
      width: '100%' // Adjust the width as needed
    });
  }

  public launchInvoiceEditDialog(salesInvoice: SalesInvoice) {
     const ref= this.dialog.open(InvoiceCapturingComponent, {
        data : {
          salesInvoiceToEdit: salesInvoice
        },
        width: '100%'
      });

    ref.componentInstance.invoiceData = salesInvoice;
  }


  public launchInvoicePreview(salesInvoice: SalesInvoice) {
    const ref= this.dialog.open(InvoicePreviewComponent, {
      width: '780px'
    });

    ref.componentInstance.salesInvoice = salesInvoice;
  }
}
