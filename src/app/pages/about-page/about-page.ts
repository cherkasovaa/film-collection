import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbsService } from '../../services/breadcrumbs/breadcrumbs-service';

@Component({
  selector: 'app-about-page',
  imports: [],
  templateUrl: './about-page.html',
  styleUrl: './about-page.scss',
})
export class AboutPage {
  private activatedRoute = inject(ActivatedRoute);
  private breadcrumbsService = inject(BreadcrumbsService);

  constructor() {
    this.activatedRoute.params.subscribe(() => {
      const data = this.activatedRoute.snapshot.data;
      const label = data['breadcrumb'] || 'About';

      this.breadcrumbsService.setBreadcrumbs([
        {
          label: 'Home',
          path: '/',
        },
        {
          label: label,
        },
      ]);
    });
  }
}
