import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {environment as env} from "../../environments/environment";
import {Expense} from "./expense";


@Injectable({providedIn: 'root'})
export class ExpenseService {


  constructor(private http: HttpClient) {
  }

  public fetchAllExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>(`${env.apiUrl}/expenses`).pipe(map(data => data.sort((a, b) => {
      return a.effectiveDate > b.effectiveDate ? -1 : 1;
    })))
  }
}
