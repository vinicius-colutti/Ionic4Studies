import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ComponentModalInternoPage } from '../component-modal-interno/component-modal-interno.page';
import { OverlayEventDetail } from '@ionic/core';

@Component({
  selector: 'app-component-modal',
  templateUrl: './component-modal.page.html',
  styleUrls: ['./component-modal.page.scss'],
})
export class ComponentModalPage implements OnInit {

  constructor(private modalCtrl : ModalController) { }

  ngOnInit() {
  }

  async showModal(){

    let modal = await this.modalCtrl.create({
      component: ComponentModalInternoPage,
      componentProps: {idade: 19, nome: "Vinicius"}
    });
    
    modal.onDidDismiss().then(async(responseModal: OverlayEventDetail)=>{
      console.log(responseModal.data.nome);
    });

    //teste
    return await modal.present();
  }

}
