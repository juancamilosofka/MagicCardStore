import { Component, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Card, MagicCard } from 'src/app/models/magicCardApiModel';
import { User } from 'src/app/models/user';
import { MagicCardsApiService } from 'src/app/services/magic-cards-api.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-usercardlist',
  templateUrl: './usercardlist.component.html',
  styleUrls: ['./usercardlist.component.scss']
})
export class UsercardlistComponent {
  @Input()
  currentuser?:User;

  cardlist?: MagicCard;

  constructor(private firestoreserviceuser: UserServiceService,
    private magicapiservice: MagicCardsApiService,
    private angularAuth:AngularFireAuth){

    }

  ngOnInit(){
    this.loaduser();
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



  existlist(): boolean{
    if ( this.currentuser?.cards  == undefined ||
      this.currentuser?.cards  == null ||
      this.currentuser?.cards.length == 0){
      return false;
    }

  if (this.currentuser?.cards.length >= 1){
    this.loadcards();
    return true;
  }
  return false
  }

  loadcards(){
    this.currentuser!.cards.forEach(card => {
      this.loadsingelcard(card.cardid)
    })
  }

  loadsingelcard(cardid: string) {
    this.magicapiservice.findCardbyId(cardid).subscribe(
        magiccard => {
          this.cardlist?.cards.push(magiccard.cards[0])
        }
    );
      }



}
