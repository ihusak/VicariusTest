import { MenuItem } from "./menu-data.service";

export const dataMenuItems: MenuItem[] = [
  {
    title: 'Home',
    icon: 'bi-house',
    route: ''
  },
  {
    title: 'About',
    icon: 'bi-file-person',
    route: 'about'
  },
  {
    title: 'Services',
    icon: 'bi-tools',
    route: 'services'
  },
  {
    title: 'Products',
    icon: 'bi-basket',
    route: 'products',
    children: [
      {
        title: 'Product 1',
        icon: 'bi-sticky',
        route: 'products/1'
      },
      {
        title: 'Product 2',
        icon: 'bi-sticky',
        route: 'products/2'
      }
    ]
  },
  {
    title: 'Contact',
    icon: 'bi-person-lines-fill',
    route: 'contact'
  }
];