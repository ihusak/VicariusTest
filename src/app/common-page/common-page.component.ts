import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-common-page',
  standalone: true,
  imports: [],
  templateUrl: './common-page.component.html',
  styleUrl: './common-page.component.scss'
})
export class CommonPageComponent {
  pageTitle: string = '';
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params: Params) => {
      this.pageTitle = params['title'];
    })
  }
}
