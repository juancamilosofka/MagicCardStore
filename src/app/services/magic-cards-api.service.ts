import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { MagicCard, MagicCardSingle } from '../models/magicCardApiModel';

@Injectable({
  providedIn: 'root'
})
export class MagicCardsApiService {

  constructor(private client:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  bringAllCardPage(size:number , page:number){

    return this.client.get<MagicCard>('https://api.magicthegathering.io/v1/cards?page='+page+'1&pageSize='+size)
  }

  findCardbyId(id:string): Observable<MagicCardSingle>{

    return this.client.get<MagicCardSingle>('https://api.magicthegathering.io/v1/cards/'+id)
  }
}
