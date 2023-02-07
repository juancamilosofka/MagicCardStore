import { Timestamp } from "@angular/fire/firestore";
import {UserCard} from "./userCard";
export type User = {
  uid: string,
  email: string,
  name: string,
  funds: number,
  lastfunddate: Timestamp,
  totalfundday: number,
  cards: UserCard[]
}
