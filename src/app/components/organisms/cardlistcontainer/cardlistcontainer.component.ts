import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MagicCard } from 'src/app/models/magicCardApiModel';
@Component({
  selector: 'app-cardlistcontainer',
  templateUrl: './cardlistcontainer.component.html',
  styleUrls: ['./cardlistcontainer.component.scss']
})
export class CardlistcontainerComponent {
  constructor(private router: Router
     ){   }

  @Input()
  cardlist?: MagicCard;
  @Input()
  activatebutton:boolean = true;

  @Output() buycard = new EventEmitter<string>();
  buttonaction(cardid: string) {

   this.buycard.emit(cardid);
 }
}
