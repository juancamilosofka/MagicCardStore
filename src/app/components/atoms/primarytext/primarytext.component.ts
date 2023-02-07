import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-primarytext',
  templateUrl: './primarytext.component.html',
  styleUrls: ['./primarytext.component.scss']
})
export class PrimarytextComponent {
  @Input()
  text:string = "";

}
