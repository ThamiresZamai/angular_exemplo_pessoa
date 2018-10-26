import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../service/pessoa.service';
import { Pessoa } from '../../model/pessoa';

@Component({
  selector: 'app-tipo-pessoa-list',
  templateUrl: './tipo-pessoa-list.component.html',
  styleUrls: ['./tipo-pessoa-list.component.css']
})
export class TipoPessoaListComponent implements OnInit {

  constructor(private service : PessoaService) { }

  pessoa : Pessoa;
  pessoas : Array<Pessoa>;
  ngOnInit() {
    this.pessoa = new Pessoa();
    this.pessoas = new Array();
    this.carregartabela();
  }

  carregartabela(){
    this.service.getPessoa().subscribe(lstpessoa => this.pessoas = lstpessoa)
  }
}
