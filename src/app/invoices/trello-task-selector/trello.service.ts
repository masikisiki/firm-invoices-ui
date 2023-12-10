import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment as env} from "../../../environments/environment";
import {TrelloObject} from "./trello-object";

@Injectable({
  providedIn: 'root'
})
export class TrelloService {

  private readonly baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${env.apiUrl}`
  }

  public getBoards(): Observable<TrelloObject[]> {
    return this.http.get<TrelloObject[]>(`${this.baseUrl}/invoices/trello/boards`);
  }

  public getSwimLanes(boardId: string): Observable<TrelloObject[]> {
    return this.http.get<TrelloObject[]>(`${this.baseUrl}/invoices/trello/swimLanes/${boardId}`);
  }

  public getCards(listId: string): Observable<TrelloObject[]> {
    return this.http.get<TrelloObject[]>(`${this.baseUrl}/invoices/trello/cards/${listId}`);
  }
}
