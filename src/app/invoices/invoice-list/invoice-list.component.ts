import {Component, Pipe, PipeTransform} from '@angular/core';
import {InvoiceService} from "../../invoice.service";
import {DialogService} from "../../dialog.service";
import {SalesInvoice} from "../../Models/sales-invoice";
import {ClientInvoiceConfig} from "../../Models/invoice-config";
import {addMonths, format, startOfMonth, startOfYear} from 'date-fns';
import {MatTableDataSource} from "@angular/material/table";

type InvoiceStatusFilter = 'PAID' | 'PENDING' | 'CANCELLED' | 'OVERDUE' | 'ALL';

@Pipe({
  name: 'invoiceFilter'
})
export class InvoiceFilterPipe implements PipeTransform {
  transform(invoices: InvoiceSummary[], searchTerm: string, statusFilter: InvoiceStatusFilter): InvoiceSummary[] {
    if (!invoices) {
      return invoices;
    }

    const textFiltered = searchTerm ? invoices.filter(invoice => {
      return `${invoice.invoiceNumber}`.includes(searchTerm)
        || `${invoice.dueDate}`.includes(searchTerm)
        || `${invoice.status}`.includes(searchTerm)
        || `${invoice.client}`.includes(searchTerm);
    }) : invoices;

    if (statusFilter && statusFilter !== 'ALL') {
      return textFiltered.filter(invoice => invoice.status === statusFilter)
    } else {
      return textFiltered;
    }
  }
}

type  InvoiceSummary = {
  amount: number,
  invoiceDate: Date,
  dueDate: Date,
  invoiceNumber: string,
  client: string,
  status: string
};

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css'],
  providers: [InvoiceFilterPipe]
})
export class InvoiceListComponent {

  public invoiceSummary: InvoiceSummary[] = [];
  public displayedColumns: string[] = ['invoiceNumber', 'amount', 'dueDate', 'client', 'status', 'actions'];
  private salesInvoices: SalesInvoice[] = [];
  private invoiceConfigs: ClientInvoiceConfig[] = [];

  public filteredInvoices: MatTableDataSource<InvoiceSummary> = new MatTableDataSource<InvoiceSummary>();


  filters: any = {
    amount: null,
    status: null,
    dueDate: null
  };
  ageFilterOptions = [
    {
      name: "This Month",
      date: startOfMonth(new Date()),
    },
    {
      name: "Last Month",
      date: startOfMonth(addMonths(new Date(), -1)),
    },
    {
      name: "3 Months Ago",
      date: startOfMonth(addMonths(new Date(), -3)),
    },
    {
      name: "6 Months Ago",
      date: startOfMonth(addMonths(new Date(), -6)),
    },
    {
      name: "This Year",
      date: startOfYear(new Date()),
    }
  ]
  selectedDateFilter = startOfMonth(new Date())
  amounts = [
    {name: 'Jul', amount: 1800},
    {name: 'Aug', amount: 2200},
  ];
  isTrendUp = false;
  searchTerm = '';

  invoiceStatusFilter: InvoiceStatusFilter = 'ALL';
  invoiceStatusFilterOptions = ['PAID', 'PENDING', 'CANCELLED', 'OVERDUE', 'ALL'];


  constructor(private invoiceService: InvoiceService, private invoiceFilterPipe: InvoiceFilterPipe, private dialogService: DialogService) {
    this.invoiceService.fetchAllInvoice().subscribe({
      next: (data) => {
        this.salesInvoices = data;
        this.invoiceSummary = data.map(inv => {
          return {
            invoiceNumber: inv.header.invoiceNumber,
            amount: inv.header.invoiceAmount,
            dueDate: new Date(inv.header.dueDate),
            invoiceDate: new Date(inv.header.invoiceDate),
            client: inv.header.clientName,
            status: inv.header.status
          }
        });

        this.filteredInvoices = new MatTableDataSource<InvoiceSummary>(this.invoiceSummary);
      }
    })

    this.invoiceService.findInvoiceConfiguration().subscribe({
      next: (values) => {
        this.invoiceConfigs = values;
      }
    });
  }

  public get filteredInvoiceTotal() {
    if (!this.filteredInvoices) return 0;
    return this.filteredInvoices.data.reduce((sum, currInv) => sum += currInv.amount, 0)
  }

  public amountByStatus(): { paid: number, pending: number, cancelled: number } {
    if (!this.filteredInvoices) return {paid: 0, pending: 0, cancelled: 0};
    const data = this.filteredInvoices.data;
    return {
      paid: data.filter(inv => inv.status === 'PAID').length,
      pending: data.filter(inv => inv.status === 'PENDING').length,
      cancelled: data.filter(inv => inv.status === 'CANCELLED').length
    }
  }

  public get top2MonthTrends() {
    const top3 = (this.salesInvoices || [])
      .filter(inv => inv.header.invoiceAmount > 3500)
      .sort((a, b) => a.header.invoiceDate > b.header.invoiceDate ? -1 : 1);
    if (top3?.length > 3) {
      const recent1 = top3[0];
      const recent2 = top3[1];
      const recent3 = top3[2];
      return [
        {
          month: format(new Date(recent2.header.invoiceDate), 'LLL'),
          amount: recent2.header.invoiceAmount,
          trend: recent2.header.invoiceAmount > recent3.header.invoiceAmount ? 'UP' : 'DOWN'
        },
        {
          month: format(new Date(recent1.header.invoiceDate), 'LLL'),
          amount: recent1.header.invoiceAmount,
          trend: recent1.header.invoiceAmount > recent2.header.invoiceAmount ? 'UP' : 'DOWN'
        }
      ]
    }
    return [];
  }

  public get statusCounts() {
    const data = this.amountByStatus();
    return [
      {icon: 'done', count: data.paid},       // Paid invoices
      {icon: 'hourglass_empty', count: data.pending},  // Pending invoices
      {icon: 'warning', count: data.cancelled},    // Overdue invoices
    ]
  };

  openNewInvoiceDialog() {
    this.dialogService.openNewInvoiceDialog();
  }

  openTrelloInvoiceDialog() {
    this.dialogService.openTrelloInvoiceDialog();
  }

  applyFilters() {
    this.filteredInvoices.data = this.invoiceFilterPipe.transform(this.invoiceSummary, this.searchTerm, this.invoiceStatusFilter);
  }

  public launchInvoiceEdit(input: { invoiceNumber: string }): void {
    if (input.invoiceNumber) {
      const invoice = this.salesInvoices.find(x => x.header.invoiceNumber == input.invoiceNumber);
      if (invoice) {
        this.dialogService.launchInvoiceEditDialog(invoice);
      }
    }
  }

  public launchInvoicePreview(input: { invoiceNumber: string }): void {
    if (input.invoiceNumber) {
      const invoice = this.salesInvoices.find(x => x.header.invoiceNumber == input.invoiceNumber);
      if (invoice) {
        this.dialogService.launchInvoicePreview(invoice);
      }
    }
  }

  dateFilterChanged() {
    const filtered = this.invoiceSummary.filter(f => f.dueDate >= this.selectedDateFilter)
    this.filteredInvoices.data = filtered;
  }

  private sum(invoiceSummaries: InvoiceSummary[]) {
    return (invoiceSummaries || []).reduce((sum, currInv) => sum += currInv.amount, 0);
  }
}
