import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from '../model/livro';
import { Autor } from '../model/autor';
import { Categoria } from '../model/categoria';

const URL: string = 'http://localhost:8080/livro';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  constructor(private http : HttpClient) { }

  getLivro(): Observable<Livro[]>{
    return this.http.get<Livro[]>(URL)
  }

  delete(id : number): Observable<void>{
    return this.http.delete<void>(URL + "/" + id);
  }

  postlivro(livro : Livro): Observable<Livro>{
    return this.http.post<Livro>(URL, livro);
  }

  getAutores():Observable<Autor[]>{
    return this.http.get<Autor[]>(URL + "/autores")
  }

  getCategoria(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(URL + "/categoria")
  }

  getLivroID(id : number):Observable<Livro>{
    return this.http.get<Livro>(URL + "/" + id)
  }
}
