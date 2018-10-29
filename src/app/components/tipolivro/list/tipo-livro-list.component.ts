import { Component, OnInit } from '@angular/core';
import { Livro } from '../../model/livro';
import { LivroService } from '../../service/livro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipo-livro-list',
  templateUrl: './tipo-livro-list.component.html',
  styleUrls: ['./tipo-livro-list.component.css']
})
export class TipoLivroListComponent implements OnInit {

  livro : Livro;
  livros : Array<Livro>;
  constructor( private service : LivroService,
    private router: Router) { }

  ngOnInit() {
    this.livro = new Livro();
    this.livros = new Array();
    this.carregartabela();
  }

  carregartabela(){
    this.service.getLivro().subscribe(lstlivro => this.livros = lstlivro)
  }

  excluir(id: number){
    this.service.delete(id).subscribe(() => this.carregartabela())
  }

  alterar(id : number){
    this.router.navigate(['/tipo-livro/form', id]);
  }
}
