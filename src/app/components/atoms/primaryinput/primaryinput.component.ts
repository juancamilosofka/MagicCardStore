import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-primaryinput',
  templateUrl: './primaryinput.component.html',
  styleUrls: ['./primaryinput.component.scss']
})
export class PrimaryinputComponent {


  @Input()
  placeholder: string = '';

  @Input()
  imputtext: string = '';

  @Output() newItemEvent = new EventEmitter<string>();

  imputtextevent(event: Event) {
  this.newItemEvent.emit(this.imputtext);
}
}
