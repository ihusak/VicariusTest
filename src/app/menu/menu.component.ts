import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuDataService, MenuItem } from './menu-data.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    MenuItemComponent
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  public menuItems: MenuItem[] = [];
  public collapse: boolean = true;
  constructor(private menuDataService: MenuDataService) {
    this.menuItems = this.menuDataService.getMenuDataItems();
  }
}
