import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Films } from '../../services/films/films';

@Component({
  selector: 'app-films-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './films-list.html',
  styleUrl: './films-list.scss',
})
export class FilmsList implements OnInit {
  constructor(readonly filmsService: Films) {}

  ngOnInit(): void {}
}
