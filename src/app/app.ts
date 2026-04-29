import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FilmsList } from './components/films-list/films-list';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, FilmsList],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly companyName = signal('Film Collection');
}
