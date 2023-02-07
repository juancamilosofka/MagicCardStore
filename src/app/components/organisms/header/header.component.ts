import { Component, Input, Output, EventEmitter} from '@angular/core';
import {RouterModule} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() sidebaritems?: string[];
  @Input() buttontext?: string;



  logoutuser(newItem: MouseEvent) {

    this.newlogoutEvent.emit(newItem);
  }

  @Output() newlogoutEvent = new EventEmitter<MouseEvent>();
}
