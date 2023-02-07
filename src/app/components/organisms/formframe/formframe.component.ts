import { Component, Output,EventEmitter, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserServiceService } from 'src/app/services/user-service.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-formframe',
  templateUrl: './formframe.component.html',
  styleUrls: ['./formframe.component.scss']
})
export class FormframeComponent {

  user?:User;
  isLoadingResults = true;
  imputtext = '';
  constructor(private router: Router,
   private firestoreserviceuser: UserServiceService
    ){
        this.isLoadingResults = false;
  }

  @Input()
  storename:string = "";

  @Input()
  buttonname:string = "";

  currentinputtext: string = "";
  imputtextevent(event: string) {
    this.currentinputtext = event;
  }

  buttonaction(newItem: MouseEvent) {
    this.newbuttonEvent.emit(newItem);
  }

  @Output() newbuttonEvent = new EventEmitter<MouseEvent>();



  savecurrentuser() {

    if(this.currentinputtext.length >= 1){
    localStorage.setItem('currentuser', this.currentinputtext);
   // this.createnewchat();
    this.router.navigate(['']);
  }
  }

  createnewchat(){


    this.firestoreserviceuser.Savenewuser(this.user!).then;

    this.GetuserData();
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
