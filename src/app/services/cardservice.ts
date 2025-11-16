import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  cards!:Card[];
    filteredCards!: Card[];
  constructor(@Inject('apiUrl') private apiUrl:string,private http:HttpClient)
  {

  }
  getCards():void{
     this.http.get<Card[]>(this.apiUrl+'/cards').subscribe((res:Card[])=>{
      this.cards =this.filteredCards=res;
    });
  }
  addCards(card:Card): Observable<any> {
    return this.http.post<Card[]>(this.apiUrl+'/cards',card);
  }
  updateCards(card:Card,cardId:number): Observable<any> {
    return this.http.put<Card[]>(this.apiUrl+'/cards/'+cardId,card);
  }
  deleteCards(cardId:number): Observable<any> {
    return this.http.delete<Card[]>(this.apiUrl+'/cards/'+cardId);
  }
}
