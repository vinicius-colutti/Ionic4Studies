import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-refresher',
  templateUrl: './component-refresher.page.html',
  styleUrls: ['./component-refresher.page.scss'],
})
export class ComponentRefresherPage implements OnInit {

  message: string = 'Puxe para baixo para obter novas informações';  
  constructor() { }

  ngOnInit() {
  }

  
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      this.message = "Parabéns voce aprendeu a usar o componente";
      event.target.complete();
    }, 2000);
  }
}
