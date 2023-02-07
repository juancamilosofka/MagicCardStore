import { Timestamp } from "@angular/fire/firestore"

export type UserCard = {
  cardid: string,
  previousOwnerId: string[],
  ownerSince: Timestamp
}
