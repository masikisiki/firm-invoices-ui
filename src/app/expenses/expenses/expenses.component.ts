import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Expense} from "../expense";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ExpenseService} from "../expenses.service";
import {LegendPosition} from "@swimlane/ngx-charts";

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  public displayedColumns: string[] = ['id', 'description', 'category', 'amount', 'effectiveDate', 'expiryDate'];
  public dataSource: MatTableDataSource<Expense> = new MatTableDataSource<Expense>([]);

  public expenses: Expense[] = [];
  public chartData: any[] =[];
  legendPosition: LegendPosition = LegendPosition.Below;


  constructor(private expenseService: ExpenseService) {
  }

  ngOnInit() {
    this.expenseService.fetchAllExpenses().subscribe({
      next: (data) => {
        this.dataSource.data = data;
        this.expenses = data;
        this.chartData = this.generateChartData(this.expenses);
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

  public get expenseCategoryCount(): { category: string, count: number }[] {
    const groupedExpenses = this.expenses.reduce((result: any, expense) => {
      const category = expense.category;
      if (!result[category]) {
        result[category] = 1;
      } else {
        result[category]++;
      }
      return result;
    }, {});

    return Object.keys(groupedExpenses).map((category) => ({
      category: category,
      count: groupedExpenses[category],
    }));
  }

  public filterCategory(category: string): void {
    this.applyFilter(category);
  }

  public get countActiveExpenses(): number {
    const currentDate = new Date();
    return this.expenses.filter(expense => !expense.expiryDate || expense.expiryDate >= currentDate).length;
  }

  public get calculateTotalAmountForActive(): number {
    const currentDate = new Date();
    return this.expenses
      .filter(expense => !expense.expiryDate || expense.expiryDate >= currentDate)
      .reduce((total, expense) => total + expense.amount, 0);
  }



  generateChartData(expenses: Expense[]): any[] {
    // Create an empty object to store category totals
    const categoryTotals:any = {};

    // Calculate the total amount for each category
    expenses.forEach((expense) => {
      if (categoryTotals.hasOwnProperty(expense.category)) {
        categoryTotals[expense.category] += expense.amount;
      } else {
        categoryTotals[expense.category] = expense.amount;
      }
    });

    // Transform the category totals into the desired format for ngx-charts
    const chartData = Object.keys(categoryTotals).map((category) => ({
      name: category,
      value: categoryTotals[category],
      extra: {
        code: category, // You can add any additional data here if needed
      },
    }));

    return chartData;
  }

}
