import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Timestamp } from '@angular/fire/firestore';
import { MagicCard } from 'src/app/models/magicCardApiModel';
import { User } from 'src/app/models/user';
import { UserCard } from 'src/app/models/userCard';
import { MagicCardsApiService } from 'src/app/services/magic-cards-api.service';
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
      var newcard:UserCard =  {
        cardid: cardid,
        previousOwnerId: [] ,
        ownerSince:  Timestamp.fromDate(new Date)
       }
        this.currentuser!.cards.push(newcard);
        this.currentuser!.funds = newfunds
           this.firestoreserviceuser.updateUsersSingle(this.currentuser!).finally()

          }
          else{
            alert("you have not Funds on your balance")
          }
  }

}
