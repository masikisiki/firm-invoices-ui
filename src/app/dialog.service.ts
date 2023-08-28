import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {CaptureInvoiceComponent} from "./invoices/capture-invoice/capture-invoice.component";
import {SalesInvoice} from "./Models/sales-invoice";

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  public openNewInvoiceDialog() {
    this.dialog.open(CaptureInvoiceComponent, {
      width: '100%' // Adjust the width as needed
    });
  }

  public launchInvoiceEditDialog(salesInvoice: SalesInvoice) {
      this.dialog.open(CaptureInvoiceComponent, {
        data : {
          salesInvoiceToEdit: salesInvoice
        },
        width: '100%'
      })
  }
}
