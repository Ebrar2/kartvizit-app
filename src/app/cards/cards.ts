import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { MatDialog } from '@angular/material/dialog';
import { CardModal } from './card-modal/card-modal';
import { CardService } from '../services/cardservice';
import { Card} from '../models/card';
@Component({
  selector: 'app-cards',
  standalone: false,
  templateUrl: './cards.html',
  styleUrl: './cards.scss',
})
export class Cards implements OnInit {

 constructor(public dialog:MatDialog,public cardService:CardService )
 {

 }
  ngOnInit(): void {
    this.cardService.getCards();
  }

  openAddCardModal(): void {
   const dlg= this.dialog.open(CardModal, {
      width: '400px'
    });
  
  }


}
