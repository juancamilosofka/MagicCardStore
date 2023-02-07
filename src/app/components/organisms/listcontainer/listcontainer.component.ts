import { Component,Input } from '@angular/core';
import { MagicCard } from 'src/app/models/magicCardApiModel';

@Component({
  selector: 'app-listcontainer',
  templateUrl: './listcontainer.component.html',
  styleUrls: ['./listcontainer.component.scss']
})
export class ListcontainerComponent {
  @Input()
  tittle:string = "";
  @Input()
  detailtext:string = "";
  @Input()
  buttontext:string = "";
  @Input()
  imageUrl:string = "";




}
