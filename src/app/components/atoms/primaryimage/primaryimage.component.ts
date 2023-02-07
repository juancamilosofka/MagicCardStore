import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primaryimage',
  templateUrl: './primaryimage.component.html',
  styleUrls: ['./primaryimage.component.scss']
})
export class PrimaryimageComponent {

  @Input()
  imageUrl:string = "";
}
