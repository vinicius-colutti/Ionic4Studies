import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController, ModalController } from '@ionic/angular';
import { ViewController } from '@ionic/core';

@Component({
  selector: 'app-component-modal-interno',
  templateUrl: './component-modal-interno.page.html',
  styleUrls: ['./component-modal-interno.page.scss'],
})
export class ComponentModalInternoPage implements OnInit {

  constructor(private navParam : NavParams, private alertCtrl : AlertController, private modalCtrl : ModalController) { }

  async ngOnInit() {
    let nome = this.navParam.get('nome');
    let idade = this.navParam.get('idade');
    await this.showAlert(nome, idade);
  }

  async showAlert(nomeAlert, idadeAlert){
    let alert = await this.alertCtrl.create({

      header: "Bem vindo",
      message: "Olá "+ nomeAlert + ", Você tem: " + idadeAlert + " anos.",
      buttons:[
        {
          text: 'Ok',
          role: 'cancel',
          handler: () => {
            console.log('OK CLICADO');
          }
        }
      ]

    });
    await alert.present();
  }

  async closeModal(){
    let parametroDeResposta = {nome: "Colutti", idade: 20};
    await this.modalCtrl.dismiss(parametroDeResposta);
  }

}
