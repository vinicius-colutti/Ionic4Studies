import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-search-bar',
  templateUrl: './component-search-bar.page.html',
  styleUrls: ['./component-search-bar.page.scss'],
})
export class ComponentSearchBarPage implements OnInit {

   nome : string = '';
   pessoas : any;
   pessoasFiltradas : any; 
  constructor() {
    this.pessoas=[
      {id:1,idade:19,nome:"Vinicius"},
      {id:2,idade:28,nome:"Salomao"},
      {id:3,idade:20,nome:"Carlos"},
      {id:4,idade:23,nome:"Guilherme"},
      {id:5,idade:18,nome:"Thiaguinho"},
      {id:6,idade:30,nome:"Uver"},
      {id:7,idade:25,nome:"Paulo"},
      {id:8,idade:22,nome:"Rovini"},
      {id:9,idade:21,nome:"Lucas"}
    ];

    this.pessoasFiltradas = this.pessoas;
  }

  ngOnInit() {
  }

  filtrarItens(){
    this.pessoasFiltradas = this.filtrarPessoas(this.nome);
  }

  filtrarPessoas(nome){
    this.pessoasFiltradas = this.pessoas;
    return this.pessoasFiltradas.filter((item)=>{
      return item.nome.toLowerCase().includes(nome.toLowerCase());
    });
  }

}
