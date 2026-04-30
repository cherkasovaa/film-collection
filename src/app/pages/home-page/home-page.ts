import { Component } from '@angular/core';
import { FilmsList } from '../../components/films-list/films-list';

@Component({
  selector: 'app-home-page',
  imports: [FilmsList],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {}
