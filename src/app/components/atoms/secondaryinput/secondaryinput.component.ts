import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-secondaryinput',
  templateUrl: './secondaryinput.component.html',
  styleUrls: ['./secondaryinput.component.scss']
})
export class SecondaryinputComponent {
  @Input()
  formControlName:string = "";
  @Input()
  placeholder: string = '';

  @Input()
  fundsForm = new FormGroup(
    {fundstoadd: new FormControl(' ',
      [Validators.required,
       Validators.pattern("^[0-9]*$"),
    Validators.max(200)]
  )});


  @Input()
  imputtext: string = '';

  @Output() newItemEvent = new EventEmitter<FormGroup>();

  imputtextevent(event: Event) {
  this.newItemEvent.emit(this.fundsForm);
}
}
