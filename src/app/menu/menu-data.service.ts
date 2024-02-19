import { Injectable } from '@angular/core';
import { dataMenuItems } from './pages-data';


export interface MenuItem {
  title: string
  icon: string
  route: string
  children?: MenuItem[]
}

@Injectable({
  providedIn: 'root'
})
export class MenuDataService {
  private menuDataItems: MenuItem[] = dataMenuItems;
  public getMenuDataItems(): MenuItem[] {
    return this.menuDataItems;
  }
}
