import { Component, inject } from '@angular/core';
import { Films } from '../../services/films/films';
import { FilmCard } from '../film-card/film-card';

@Component({
  selector: 'app-films-list',
  standalone: true,
  imports: [FilmCard],
  templateUrl: './films-list.html',
  styleUrl: './films-list.scss',
})
export class FilmsList {
  readonly filmsService = inject(Films);
}
