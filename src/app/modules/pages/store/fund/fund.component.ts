import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from 'src/app/models/user';
import { UserServiceService } from 'src/app/services/user-service.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { Timestamp } from '@angular/fire/firestore';

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.scss']
})
export class FundComponent  implements OnInit{

  fundsForm = new FormGroup(
    {fundstoadd: new FormControl('',
      [Validators.required,
       Validators.pattern("^[0-9]*$"),
    Validators.max(200)]
  )});


currentuser?:User;

constructor(private firestoreserviceuser: UserServiceService,
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



addfunds(funds: number){

if(this.checkfunds(funds)){
 // var usersdata: User[];
  var newfunds =   this.currentuser!.funds + funds;
  this.currentuser!.funds =  newfunds;
  var newfundsday =   this.currentuser!.totalfundday + funds;
  this.currentuser!.totalfundday =  newfundsday;
  this.currentuser!.lastfunddate =  Timestamp.fromDate(new Date);
      this.firestoreserviceuser.updateUsersSingle(this.currentuser!).finally()

}

}

checkfunds(funds: number): boolean{
 if(this.checkdate(funds)) {
  return this.checklastfund(funds)

 }
 return true

}

checkdate(funds: number):boolean{
  var currentdate =  new Date
var storedate = this.currentuser!.lastfunddate.toDate()



if(storedate ==  currentdate
  ){
    this.currentuser!.totalfundday =  0;
    console.log(formatDate(storedate, 'yyyy/MM/dd', 'en' ))
    return false;
  }
  return true;
}

checklastfund(funds: number):boolean{

if (this.currentuser!.totalfundday + funds > 200 ){

  alert("maximun amount to add by day is $200");

return false;

}
return true;
}




}
