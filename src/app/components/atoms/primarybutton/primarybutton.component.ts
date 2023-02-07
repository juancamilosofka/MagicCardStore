import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-primarybutton',
  templateUrl: './primarybutton.component.html',
  styleUrls: ['./primarybutton.component.scss']
})
export class PrimarybuttonComponent {

  @Input() icon: string ='bi bi-send';


}
