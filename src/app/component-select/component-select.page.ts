import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-select',
  templateUrl: './component-select.page.html',
  styleUrls: ['./component-select.page.scss'],
})
export class ComponentSelectPage implements OnInit {

  customAlertOptions: any = {
    header: 'Melhores Frutas',
    subHeader: 'Selecione o que deseja',
    message: 'apenas R$1,00',
    translucent: true
  }
  customPopoverOptions: any = {
    header: 'Cor do cabelo',
    subHeader: 'Qual a cor do seu cabelo',
    message: 'Informe a cor dominante'
  }


  constructor() { }

  ngOnInit() {
  }

}
