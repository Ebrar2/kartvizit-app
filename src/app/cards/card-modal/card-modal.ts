import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardService } from '../../services/cardservice';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Card } from '../../models/card';
import { error } from 'console';


@Component({
  selector: 'app-card-modal',
  standalone: false,
  templateUrl: './card-modal.html',
  styleUrl: './card-modal.scss',
})
export class CardModal implements OnInit {
  cardForms!:FormGroup;
  showSpinner:boolean=false;
   constructor(private formBuilder:FormBuilder
    ,private cardService:CardService
    ,private dialogRef:MatDialogRef<CardModal>
    ,private _snackBar:MatSnackBar
    ,@Inject(MAT_DIALOG_DATA) public data:Card){}

   ngOnInit(): void {
     this.cardForms=this.formBuilder.group(
      {
        name:[this.data?.name || '',Validators.maxLength(50)],
        title:[this.data?.title || '',[Validators.required,Validators.maxLength(255)]],
        email:[this.data?.email || '',[Validators.email,Validators.maxLength(50)]],
        phone:[this.data?.phone ||'',[Validators.required,Validators.maxLength(20)]],
        address:[this.data?.address || '',Validators.maxLength(255)],
      }
     );

   }
  addCardForm():void
  {
    this.showSpinner=true;
   this.cardService.addCards(this.cardForms.value)
   .subscribe((res:any)=>{
      this.getSuccess('success',res || 'Kartvizit Başarılı şekilde eklendi');
   },(error)=>{
     this.getError('error',error|| 'Kartvizit eklenemedi');
   });

  }
    updateCardForm():void
  {
    this.showSpinner=true;
   this.cardService.updateCards(this.cardForms.value,this.data.id)
   .subscribe((res:any)=>{
       this.getSuccess('success',res || 'Kartvizit Başarılı şekilde güncellendi');
   },(error)=>{
     this.getError('error',error || 'Kartvizit güncellenemedi');
   });

  }
  deleteCardForm():void
  {
    this.showSpinner=true;
   this.cardService.deleteCards(this.data.id)
   .subscribe((res:any)=>{
      this.getSuccess('success',res || 'Kartvizit Başarılı şekilde silindi');
   },(error)=>{
     this.getError('error',error || 'Kartvizit silinemedi');
   });
  
  }

   getSuccess(type:string, message:string):void
   {
      this._snackBar.open(message,'',{
      duration:4000,
      panelClass:type
    });
    this.cardService.getCards();
   this.showSpinner=false;
    this.dialogRef.close(true);
   }
     getError(type:string,message:string):void
   {
      this._snackBar.open(message,'',{
      duration:4000,
      panelClass:type
    });
   this.showSpinner=false;
   }
}
