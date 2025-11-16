import { Component, Input } from '@angular/core';
import { Card } from '../../models/card';
import { MatDialog } from '@angular/material/dialog';
import { CardModal } from '../card-modal/card-modal';

@Component({
  selector: 'app-card-item',
  standalone: false,
  templateUrl: './card-item.html',
  styleUrl: './card-item.scss',
})
export class CardItem {
 @Input() card!:Card;   
   constructor(private dialog:MatDialog)
   {

   }
  openUpdateCard(data:Card):void
  {
    this.dialog.open(CardModal,{
      width:"400px",
      data:data

    });
  }
}
