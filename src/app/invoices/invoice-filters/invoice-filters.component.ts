import { Component } from '@angular/core';
import {DialogService} from "../../dialog.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-invoice-filters',
  templateUrl: './invoice-filters.component.html',
  styleUrls: ['./invoice-filters.component.css'],
  providers: [MatDialog]
})
export class InvoiceFiltersComponent {

  constructor(private dialogService: DialogService) { }
  //
  openNewInvoiceDialog() {
    this.dialogService.openNewInvoiceDialog();
  }
}
