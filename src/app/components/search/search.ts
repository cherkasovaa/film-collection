import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutofocusDirective } from '../../directives/autofocus';

@Component({
  selector: 'app-search',
  imports: [FormsModule, AutofocusDirective],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class Search {
  searchText = input<string>('');
  searchTextChange = output<string>();

  onSearchTextChange(newText: string): void {
    this.searchTextChange.emit(newText);
  }
}
