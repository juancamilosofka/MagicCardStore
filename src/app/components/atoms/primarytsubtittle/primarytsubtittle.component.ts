import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primarytsubtittle',
  templateUrl: './primarytsubtittle.component.html',
  styleUrls: ['./primarytsubtittle.component.scss']
})
export class PrimarytsubtittleComponent {
  @Input()
  text:string = "";


}
