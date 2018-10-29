import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../service/pessoa.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Livro } from '../../model/livro';
import { LivroService } from '../../service/livro.service';
import { Autor } from '../../model/autor';
import { Categoria } from '../../model/categoria';

@Component({
  selector: 'app-tipo-livro-form',
  templateUrl: './tipo-livro-form.component.html',
  styleUrls: ['./tipo-livro-form.component.css']
})
export class TipoLivroFormComponent implements OnInit {

  livro : Livro;
  autores : Array<Autor>;
  categorias : Array<Categoria>;
  id: number;

  constructor(
    private service : LivroService,
    private router : Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.livro = new Livro();
    this.livro.autordto = new Autor();
    this.livro.categoriadto = new Categoria();
    this.autores = new Array();
    this.categorias = new Array();
    this.service.getAutores().subscribe(lstautores => this.autores = lstautores)
    this.service.getCategoria().subscribe(lstcategoria => this.categorias = lstcategoria)

    //para alterar
    this.id = +this.activatedRoute.snapshot.paramMap.get("id");

    if(this.id){
      this.service.getLivroID(this.id).subscribe(livro => this.livro =livro)
    }
  }

  salvar(){
    //console.log(this.livro);
    this.service.postlivro(this.livro).subscribe(()=>{
     this.router.navigate(['/tipo-livro/list']);
    })
  }
}
