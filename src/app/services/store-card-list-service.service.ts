import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

import {
  collection,
  collectionData,
  Firestore,
  orderBy,
  query,
  addDoc,
  limit,
  docData,
  setDoc,
  doc,
  CollectionReference
} from '@angular/fire/firestore';
import { StoreCardList } from '../models/storeCardList';

@Injectable({
  providedIn: 'root'
})
export class StoreCardListServiceService {

  constructor( private firestore:Firestore) { }

  private refCollect: CollectionReference = collection(
  this.firestore, "storecardlist"
)

  SavenewCard(card: StoreCardList){
    const ref = doc(this.refCollect, card.cardid);
    return setDoc(ref, card)
  }

  getCardss(): Observable<StoreCardList[]>{

    const ref = collection(this.firestore, "storecardlist");
    const queryAll = query(ref);
   return collectionData(queryAll) as Observable<StoreCardList[]>;
  }

  getsingleCard(id: string): Observable<StoreCardList> {

    const ref = doc(this.firestore,'storecardlist/'+id);
    return docData(ref, { idField: 'cardid' }) as Observable<StoreCardList>;
  }

   updateCard( card:StoreCardList) {
    const ref = doc(this.refCollect, card.cardid);
    return setDoc(ref, card)
  }
}
