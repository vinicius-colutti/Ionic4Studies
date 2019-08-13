import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-component-loading',
  templateUrl: './component-loading.page.html',
  styleUrls: ['./component-loading.page.scss'],
})
export class ComponentLoadingPage implements OnInit {

  constructor(private loadingCtrl : LoadingController) { }

  ngOnInit() {
  }

  async exibeLoadingDefault(){
    let loading = await this.loadingCtrl.create({
      message: "Processando",
      duration: 2000
    });
    return await loading.present();
  }

  async exibeLoadingCostumizado(){
    let loading = await this.loadingCtrl.create({
      message: "Processando",
      spinner: "bubbles",
      duration: 2000,
      translucent: true
    });
    return await loading.present();
  }

  async consumoApi(){
    let loading = await this.loadingCtrl.create({
      message: "Processando",
      translucent: true
    });

    //Simulando o tempo de resposta da api
    setTimeout(()=>{
      loading.dismiss();
    }, 5000);
    console.log("Requisicao do servidor");
    return await loading.present();

  }
  
}
