import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InvoicesRoutingModule} from './invoices-routing.module';
import {InvoiceFilterPipe, InvoiceListComponent} from './invoice-list/invoice-list.component';
import {MatTableModule} from "@angular/material/table";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {InvoiceCapturingComponent} from './capture-invoice/invoice-capturing.component';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatCardModule} from "@angular/material/card";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { InvoicePreviewComponent } from './invoice-preview/invoice-preview.component';


@NgModule({
  declarations: [
    InvoiceListComponent,
    InvoiceCapturingComponent,
    InvoiceFilterPipe,
    InvoicePreviewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InvoicesRoutingModule,
    MatTableModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatCardModule,
    MatDatepickerModule,
    FontAwesomeModule
  ],
  providers: [MatDialog]
})
export class InvoicesModule {
}
