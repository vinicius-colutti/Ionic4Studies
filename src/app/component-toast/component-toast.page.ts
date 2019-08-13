import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-component-toast',
  templateUrl: './component-toast.page.html',
  styleUrls: ['./component-toast.page.scss'],
})
export class ComponentToastPage implements OnInit {

  constructor(private toastCtrl : ToastController) { }

  ngOnInit() {
  }

  async showToast(){
    let toast = await this.toastCtrl.create({
      message: "Enviado via toast",
      duration: 2000
    });
    toast.present();
  }

  async showToastAlinhamento(alinhamento){
    let toast = await this.toastCtrl.create({
      message: "Enviado via toast",
      duration: 2000,
      position: alinhamento
    });
    toast.present();
  }

}
