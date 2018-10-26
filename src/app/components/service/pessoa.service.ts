import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pessoa } from '../model/pessoa';
import { Observable } from 'rxjs';

const URL: string = 'http://10.11.21.162:8080/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient) { }

  getPessoa(): Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>(URL)
  }

  postPessoa(pessoa : Pessoa): Observable<Pessoa>{
    return this.http.post<Pessoa>(URL, pessoa)
  }
}
