import { Component, input } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  year = 2026;
  githubUrl = 'https://github.com/cherkasovaa';
  createdBy = 'Alina Cherkasova';
  companyName = input.required<string>();
}
