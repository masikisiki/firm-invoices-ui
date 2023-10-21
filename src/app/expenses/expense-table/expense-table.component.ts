import {Component, ViewChild, AfterViewInit, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Expense} from "../expense";
import {ExpenseService} from "../expenses.service";


@Component({
  selector: 'app-expense-table',
  templateUrl: './expense-table.component.html',
  styleUrls: ['./expense-table.component.scss'],
})
export class ExpenseTableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'description', 'category', 'amount', 'effectiveDate', 'expiryDate'];
  dataSource: MatTableDataSource<Expense> = new MatTableDataSource<Expense>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private expenseService: ExpenseService) {
  }

  ngOnInit() {
    this.expenseService.fetchAllExpenses().subscribe({
      next: (data) => {
        this.dataSource.data = data;
      }
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

}
