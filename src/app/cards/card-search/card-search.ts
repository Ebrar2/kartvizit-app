import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardService } from '../../services/cardservice';

@Component({
  selector: 'app-card-search',
  standalone: false,
  templateUrl: './card-search.html',
  styleUrl: './card-search.scss',
})
export class CardSearch {
 constructor(
    private cardService: CardService
  ) { }
search(searchText: string): void {
    searchText = searchText.toLowerCase();
    this.cardService.filteredCards = this.cardService.cards.filter((card) => {
      return card.title.toLowerCase().indexOf(searchText) > -1 || (card.name && card.name.toLowerCase().indexOf(searchText) > -1);
    });
  }
 
}
