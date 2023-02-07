import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-detailcard',
  templateUrl: './detailcard.component.html',
  styleUrls: ['./detailcard.component.scss']
})

export class DetailcardComponent {

  @Input()
  tittle:string = "";
  @Input()
  detailtext:string = "";
  @Input()
  buttontext:string = "";
  @Input()
  imageUrl:string = "";
  @Input()
  price:string = "";

  @Input()
  activatebutton: boolean = true


  @Output() buycard = new EventEmitter<string>();
  buttonaction() {

   this.buycard.emit();
 }

}
