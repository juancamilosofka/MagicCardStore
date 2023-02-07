import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserServiceService } from 'src/app/services/user-service.service';
import { UserInfo } from '@angular/fire/auth';
import { formatDate } from '@angular/common';
import { Timestamp } from '@angular/fire/firestore';
@Component({
  selector: 'app-maincontainer',
  templateUrl: './maincontainer.component.html',
  styleUrls: ['./maincontainer.component.scss']
})
export class MaincontainerComponent implements OnInit {

  sidebaritems?: string[];

  currentuser?:User;

  constructor(private router: Router,    private firestoreserviceuser: UserServiceService,  private angularAuth:AngularFireAuth,) {

  this.sidebaritems = ['Buy_Cards', 'Fund', 'Your_Cards', 'Log'];
}

ngOnInit(): void {
  this.GetuserData();
}

logoutuser(){

  this.angularAuth.signOut()
  .then( () => {this.router.navigate(['']);});

}

GetuserData(){

  var usersdata: User[];

  this.angularAuth.currentUser.then(googleuser => {


  //  storeusers.flatMap(fireuser => {})
if( googleuser?.email?.includes!= null && googleuser?.email?.includes!= undefined ){

      this.firestoreserviceuser.getUsersSingle(googleuser!.email!).subscribe(
        (storeusers) => {

          usersdata = storeusers;
          if(storeusers.length == 0){
            this.createuser(googleuser)
           return
          }
          this.currentuser = storeusers[0];
          console.log(storeusers[0])
        })
          }
        }
      )
  }

createuser(googleuser: UserInfo ){
  var newuser:User = {
    uid: googleuser.uid ?? '',
    email: googleuser.email!,
    name: googleuser.displayName ?? '' ,
    funds: 0,
    lastfunddate: Timestamp.fromDate(new Date) ,
    totalfundday: 0,
    cards: []
  }
  this.firestoreserviceuser.Savenewuser(newuser);


}





  }








