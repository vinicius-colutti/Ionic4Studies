import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-externa',
  templateUrl: './api-externa.page.html',
  styleUrls: ['./api-externa.page.scss'],
})
export class ApiExternaPage implements OnInit {

  result : any;
  constructor() { }

  ngOnInit() {
  }

  get(){
    alert("get");
  }
  post(){
    alert("post");
  }
  put(){
    alert("put");
  }
  delete(){
    alert("delete");
  }
}
