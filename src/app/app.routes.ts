import { Routes } from '@angular/router';
import { CommonPageComponent } from './common-page/common-page.component';
import { dataMenuItems } from './menu/pages-data';
import { MenuItem } from './menu/menu-data.service';

export const routes: Routes = [];
dataMenuItems.forEach((item: MenuItem) => {
  if(!item.children) {
    routes.push({
      path: item.route,
      component: CommonPageComponent
    });
  } else {
    item.children.forEach((childItem: MenuItem) => {
      routes.push({
        path: childItem.route,
        component: CommonPageComponent
      });
    })
  }
})
