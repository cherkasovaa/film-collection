import { Component, input } from '@angular/core';
import { Film } from '../../services/films/films';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-film-card',
  imports: [RouterLink],
  templateUrl: './film-card.html',
  styleUrl: './film-card.scss',
})
export class FilmCard {
  film = input<Film>();
}
