import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuItem } from '../menu-data.service';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    NgbDropdownModule,
  ],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss'
})
export class MenuItemComponent {
  private _menuItem: MenuItem;
  @Input() set menuItem(data: MenuItem) {
    this._menuItem = data;
  };
  get menuItem(): MenuItem {
    return this._menuItem;
  }
}
