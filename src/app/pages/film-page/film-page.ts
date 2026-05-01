import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DurationPipe } from '../../pipes/duration-pipe';
import { BreadcrumbsService } from '../../services/breadcrumbs/breadcrumbs-service';
import { Films } from '../../services/films/films';

@Component({
  selector: 'app-film-page',
  imports: [RouterLink, DurationPipe],
  templateUrl: './film-page.html',
  styleUrl: './film-page.scss',
})
export class FilmPage {
  private breadcrumbsService = inject(BreadcrumbsService);
  private activatedRoute = inject(ActivatedRoute);

  readonly filmService = inject(Films);
  id: number | undefined;
  film = computed(() => this.filmService.getFilmById(this.id));

  constructor() {
    this.activatedRoute.params.subscribe((params) => {
      this.id = Number(params['id']);

      this.breadcrumbsService.setBreadcrumbs([
        {
          label: 'Home',
          path: '/',
        },
        {
          label: this.film()?.title || 'Film Not Found',
        },
      ]);
    });
  }
}
