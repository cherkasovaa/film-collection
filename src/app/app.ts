import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Breadcrumbs } from './components/breadcrumbs/breadcrumbs';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Breadcrumbs],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly companyName = signal('Film Collection');
}
