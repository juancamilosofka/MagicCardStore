import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserServiceService } from 'src/app/services/user-service.service';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrls: ['./simpleform.component.scss']
})
export class SimpleformComponent {
  @Input()
  fundsForm = new FormGroup(
    {fundstoadd: new FormControl(' ',
      [Validators.required,
       Validators.pattern("^[0-9]*$"),
    Validators.max(200)]
  )});



  user?:User;
  isLoadingResults = true;
  imputtext = '';
  usermoney:number = 1;
  @Input()
  buttontext: string = '';
  @Input()
  tittle: string = '';
  @Input()
  subtittle: string = '';
  @Input()
  placeholder: string = '';

  constructor(private router: Router,
    private firestoreserviceuser: UserServiceService
     ){
         this.isLoadingResults = false;
   }

   currentinputtext: string = "";
   imputtextevent(event: string) {
     this.currentinputtext = event;
   }

   imputtextcontrol(formControl: FormGroup) {

    this.fundsForm = formControl;
  }
  @Output() newtextEvent = new EventEmitter<string>();

   @Output() newbuttonEvent = new EventEmitter<number>();
   buttonaction() {

    this.newtextEvent.emit();
    this.newbuttonEvent.emit(Number(this.fundsForm.get('fundstoadd')?.value));
  }




 }
