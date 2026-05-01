import { Component, computed, inject, signal } from '@angular/core';
import { Films } from '../../services/films/films';
import { FilmCard } from '../film-card/film-card';
import { Search } from '../search/search';

@Component({
  selector: 'app-films-list',
  standalone: true,
  imports: [FilmCard, Search],
  templateUrl: './films-list.html',
  styleUrl: './films-list.scss',
})
export class FilmsList {
  readonly filmsService = inject(Films);

  searchText = signal('');

  filteredFilms = computed(() => {
    const searchText = this.searchText().toLocaleLowerCase();

    if (!searchText) {
      return this.filmsService.films();
    }

    return this.filmsService
      .films()
      .filter((film) => film.title.toLocaleLowerCase().includes(searchText));
  });

  updateSearchText(newText: string): void {
    this.searchText.set(newText);
  }

  onFavoriteToggled(filmId: number): void {
    this.filmsService.toggleFavorite(filmId);
  }
}
