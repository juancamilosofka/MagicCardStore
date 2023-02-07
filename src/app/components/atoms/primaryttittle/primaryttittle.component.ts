import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primaryttittle',
  templateUrl: './primaryttittle.component.html',
  styleUrls: ['./primaryttittle.component.scss']
})
export class PrimaryttittleComponent {

  @Input()
  text:string = "";
}
