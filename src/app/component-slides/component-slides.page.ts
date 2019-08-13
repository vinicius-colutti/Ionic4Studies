import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-component-slides',
  templateUrl: './component-slides.page.html',
  styleUrls: ['./component-slides.page.scss'],
})
export class ComponentSlidesPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }

  comecar(){
    this.navCtrl.navigateForward('home');
  }

}
