import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-component-action-sheet',
  templateUrl: './component-action-sheet.page.html',
  styleUrls: ['./component-action-sheet.page.scss'],
})
export class ComponentActionSheetPage implements OnInit {

  constructor(public actionSheetCtrl: ActionSheetController) { 
    
  }

  ngOnInit() {
  }
  
  async showSheet(){
    
    let actionSheet = await this.actionSheetCtrl.create({
      header: "Opções",
      buttons: [
        {
          text: 'Excluir',
          role: 'desctructive',
          icon: 'trash',
          handler: ()=>{
            alert("VERMELHO");
          }
        },
        {
          text: 'Compartilhar',
          role: 'desctructive',
          icon: 'trash',
          handler: ()=>{
            alert("VERMELHO");
          }
        
        },
        {
          text: 'Assistir',
          role: 'desctructive',
          icon: 'trash',
          handler: ()=>{
            alert("VERMELHO");
          }
        
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          icon: 'trash',
          handler: ()=>{
            alert("VERMELHO");
          }
        
        }
    ]
    });

    await actionSheet.present();
    
  }


}
