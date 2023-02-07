import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-secondarybutton',
  templateUrl: './secondarybutton.component.html',
  styleUrls: ['./secondarybutton.component.scss']
})
export class SecondarybuttonComponent {
  @Input() text?: string ='';
  @Input() class: string = '';
  @Input() disabledbutton: boolean = false;


  @Output() newButtonEvent = new EventEmitter<MouseEvent>();

  buttonaction(event: MouseEvent) {

  this.newButtonEvent.emit();
}
}
