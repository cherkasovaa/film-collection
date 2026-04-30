import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DurationPipe } from '../../pipes/duration-pipe';
import { Films } from '../../services/films/films';

@Component({
  selector: 'app-film-page',
  imports: [RouterLink, DurationPipe],
  templateUrl: './film-page.html',
  styleUrl: './film-page.scss',
})
export class FilmPage {
  readonly filmService = inject(Films);
  id = input<string>();

  film = computed(() => {
    const filmId = Number(this.id());

    return this.filmService.films().find((film) => film.id === filmId);
  });
}
