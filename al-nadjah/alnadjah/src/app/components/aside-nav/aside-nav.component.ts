import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { auth_items, nav_items } from 'src/app/api/nav';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-aside-nav',
  templateUrl: './aside-nav.component.html',
  styleUrls: ['./aside-nav.component.css'],
})
export class AsideNavComponent {
  navData: Item[] = nav_items;
  authData: Item[] = auth_items;
  @Output() close: EventEmitter<string> = new EventEmitter<string>();

  handleClose() {
    this.close.emit();
  }
}
