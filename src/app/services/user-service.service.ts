import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
  doc,
  collection,
  collectionData,
  Firestore,
  orderBy,
  where,
  query,
  addDoc,
  updateDoc,
  limit,
  setDoc,
  CollectionReference
} from '@angular/fire/firestore';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor( private firestore:Firestore) { }

private refCollect: CollectionReference = collection(
  this.firestore, "users"
)

  Savenewuser(user: User){
    const userref = doc(this.refCollect, user.uid);
    return setDoc(userref, user)
  }

  getUsers(): Observable<User[]>{

    const ref = collection(this.firestore, "users");
    const queryAll = query(ref);
   return collectionData(queryAll) as Observable<User[]>;
  }

  getUsersSingle(email: string): Observable<User[]> {

    const ref = collection(this.firestore, "users");
    const queryAll = query(ref, where("email", "==", email));
    return collectionData(queryAll) as Observable<User[]>;
  }


  async updateUsersSingle( user:User) {
    const userref = doc(this.refCollect, user.uid);
    return setDoc(userref, user)
  }

}
