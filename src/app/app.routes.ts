import { Routes } from '@angular/router';
import { CommonPageComponent } from './common-page/common-page.component';
import { dataMenuItems } from './menu/pages-data';
import { MenuItem } from './menu/menu-data.service';

const route = generateRoutes();

function generateRoutes(): (data: MenuItem[]) => Routes {
  let routes: Routes = [];
  return (data: MenuItem[]) => {
      data.forEach((item: MenuItem) => {
      routes.push({
        path: item.route,
        component: CommonPageComponent
      });
      if(item.children) {
        route(item.children);
      }
    })
    return routes;
  }
}
export const routes: Routes = route(dataMenuItems);