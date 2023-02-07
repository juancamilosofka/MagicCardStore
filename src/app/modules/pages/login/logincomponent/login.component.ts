import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserServiceService } from 'src/app/services/user-service.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user?:User;
  isLoadingResults = true;
  imputtext = '';
  constructor(private router: Router,
   private firestoreserviceuser: UserServiceService,
   private angularAuth:AngularFireAuth,

    ){
        this.isLoadingResults = false;
  }



  loginuser(){
   const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    this.angularAuth.signInWithPopup(googleAuthProvider)
    .then( () =>   {

      this.checkuser();
    });


  }


  checkuser() {




    this.router.navigate(['/main/Buy_Cards']);
  }


  createnewchat(){

    /*localStorage.setItem('currentuser', this.currentinputtext);
    this.createnewchat();
    this.router.navigate(['/main/Buy_Cards']);
    console.log("hallooo")*/
   // this.firestoreserviceuser.Savenewuser(this.user!).then;

  //  this.GetuserData();
}

async GetuserData(){

var usersdata: User[];
await this.firestoreserviceuser.getUsers().subscribe(
    (users) => {
      users
      console.log(users)
    }
  )


}

}
