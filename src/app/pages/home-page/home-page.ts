import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsList } from '../../components/films-list/films-list';
import { BreadcrumbsService } from '../../services/breadcrumbs/breadcrumbs-service';

@Component({
  selector: 'app-home-page',
  imports: [FilmsList],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  private activatedRoute = inject(ActivatedRoute);
  private breadcrumbsService = inject(BreadcrumbsService);

  constructor() {
    this.activatedRoute.params.subscribe(() => {
      const data = this.activatedRoute.snapshot.data;
      const label = data['breadcrumb'] || 'Home';

      this.breadcrumbsService.setBreadcrumbs([
        {
          label: label,
        },
      ]);
    });
  }
}
