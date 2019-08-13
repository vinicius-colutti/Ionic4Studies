import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-componentes',
  templateUrl: './componentes.page.html',
  styleUrls: ['./componentes.page.scss'],
})
export class ComponentesPage implements OnInit {

  constructor(private navCtrl : NavController) { }
  
  ngOnInit() {
  }
  openLayout(valor){
    this.navCtrl.navigateForward(valor);
  }
}
