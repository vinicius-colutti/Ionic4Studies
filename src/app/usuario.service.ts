import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http : HttpClient) { }

  obterUsuarioPorId(id : number){
    let url = 'https://jsonplaceholder.typicode.com/users/' + id;
    
    return this.http.get(url).toPromise();

  }

  adicionar(usuario : any){
    let url = 'https://jsonplaceholder.typicode.com/users/';

    let headers = new HttpHeaders({'Content-Type':'application/json'});

    this.http.post(url, usuario, {headers : headers}).toPromise();

  }
  atualizar(usuario : any){
    let url = 'https://jsonplaceholder.typicode.com/users/';

    let headers = new HttpHeaders({'Content-Type':'application/json'});

    this.http.put(url, usuario, {headers : headers}).toPromise();

  }

  excluir(id : number){
    let url = 'https://jsonplaceholder.typicode.com/users/' + id;
    
    return this.http.delete(url).toPromise();

  }
}
