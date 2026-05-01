import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideHeart } from '@lucide/angular';
import { Film } from '../../services/films/films';

@Component({
  selector: 'app-film-card',
  imports: [RouterLink, LucideHeart],
  templateUrl: './film-card.html',
  styleUrl: './film-card.scss',
})
export class FilmCard {
  film = input<Film>();

  favoriteToggled = output<number>();

  toggleFavorite(e: Event): void {
    e.stopPropagation();

    const filmId = this.film()?.id;

    if (filmId) {
      this.favoriteToggled.emit(filmId);
    }
  }
}
