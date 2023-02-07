import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MagicCard } from 'src/app/models/magicCardApiModel';
import { User } from 'src/app/models/user';
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
  console.log( this.cardlist.cards)
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
console.log("hell90" + cardid + "hi")

  }

}
