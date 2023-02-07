import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Timestamp } from '@angular/fire/firestore';
import { first } from 'rxjs';
import { MagicCard } from 'src/app/models/magicCardApiModel';
import { StoreCardList } from 'src/app/models/storeCardList';
import { User } from 'src/app/models/user';
import { UserCard } from 'src/app/models/userCard';
import { MagicCardsApiService } from 'src/app/services/magic-cards-api.service';
import { StoreCardListServiceService } from 'src/app/services/store-card-list-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-buycards',
  templateUrl: './buycards.component.html',
  styleUrls: ['./buycards.component.scss']
})

export class BuycardsComponent implements OnInit {

  currentuser?:User;

constructor( private magicapiservice: MagicCardsApiService,
  private firestoreserviceuser: UserServiceService,
  private storecardsservice: StoreCardListServiceService,
  private angularAuth:AngularFireAuth){

}

cardlist?: MagicCard;

ngOnInit(): void {
  this.getcards();
  this.loaduser();
}

getcards(){
  this.magicapiservice.bringAllCardPage(10, 6).subscribe(cards => {
    this.cardlist = cards;
  console.log( this.cardlist)
  }
  );
}

existlist(): boolean{
  if (this.cardlist == undefined){
    return false;
  }

if (this.cardlist.cards.length >= 1){
  return true;
}
return false
}

loaduser(){

    var usersdata: User[];

    this.angularAuth.currentUser.then(googleuser => {


  if( googleuser?.email?.includes!= null && googleuser?.email?.includes!= undefined ){

        this.firestoreserviceuser.getUsersSingle(googleuser!.email!).subscribe(
          (storeusers) => {
            usersdata = storeusers;
            this.currentuser = storeusers[0];
            console.log(this.currentuser)
          })
            }
          }
        )
  }

  buycard(cardid: string){
    console.log(cardid)
      var newfunds = this.currentuser!.funds - this.cardlist!.cards.find(x => x.id === cardid)!.cmc
      if(newfunds >= 0){
        this.notmorethanfive(cardid, newfunds)

          }
          else{
            alert("you have not Funds on your balance")
          }
  }

 finishbuy(cardid: string, newfunds:number){
  var newcard:UserCard =  {
  cardid: cardid,
  previousOwnerId: [] ,
  ownerSince:  Timestamp.fromDate(new Date)
 }
  this.currentuser!.cards.push(newcard);
  this.currentuser!.funds = newfunds
     this.firestoreserviceuser.updateUsersSingle(this.currentuser!).finally()
 }

  notmorethanfive(cardid: string, newfunds:number){

    this.storecardsservice.getsingleCard(cardid).pipe(first()).subscribe(card =>{
      console.log(card)
      if(card != null && card != undefined && card.totalSold <5 ){
        console.log("updatingcard")
        this.updatestorecard(card)
        this.finishbuy(cardid, newfunds)
        return
      }
      if(card == null || card == undefined ){
        console.log("saving card")
        this.addcardtostore(cardid, newfunds)
        return
      }

      alert("The Card is sold out")
    })
  }
  updatestorecard(card:StoreCardList){
    var newtotal = card.totalSold + 1
    card.totalSold = newtotal
    this.storecardsservice.updateCard(card)
  }
  addcardtostore(idcard:string, newfunds:number){
    var storecard:StoreCardList = {
      cardid: idcard,
      totalSold: 1
    }
    this.storecardsservice.SavenewCard(storecard)
    this.finishbuy(idcard, newfunds)
  }
}
