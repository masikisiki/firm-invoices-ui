import {Injectable} from "@angular/core";
import {map, Observable, of} from "rxjs";
import {SalesInvoice} from "./Models/sales-invoice";
import {HttpClient} from "@angular/common/http";
import {ClientInvoiceConfig} from "./Models/invoice-config";
import {environment as env} from "../environments/environment";

@Injectable({providedIn: 'root'})
export class InvoiceService {

  constructor(private http: HttpClient) {
  }

  public fetchAllInvoice(): Observable<SalesInvoice[]> {
    return this.http.get<SalesInvoice[]>(`${env.apiUrl}/invoices`).pipe(map(data => data.sort((a, b) => {
      return a.header.invoiceDate > b.header.invoiceDate ? -1 : 1;
    })))
  }

  public findInvoiceConfiguration(): Observable<ClientInvoiceConfig[]> {
    return this.http.get<ClientInvoiceConfig[]>(`${env.apiUrl}/clientInvoiceConfig/all`);
  }

  public saveInvoice(invoice: SalesInvoice): Observable<any> {
    return this.http.post<SalesInvoice>(`${env.apiUrl}/invoices`, invoice);
  }
}
