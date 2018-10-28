import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../model/pessoa';
import { PessoaService } from '../../service/pessoa.service';
import { Router } from '@angular/router';
import { Endereco } from '../../model/endereco';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-tipo-pessoa-form',
  templateUrl: './tipo-pessoa-form.component.html',
  styleUrls: ['./tipo-pessoa-form.component.css']
})
export class TipoPessoaFormComponent implements OnInit {

  pessoa : Pessoa;
  //enderecodto : Endereco;
  constructor(
    private service : PessoaService,
    private router : Router,
    private routerx : ActivatedRoute

    ) { }

  ngOnInit() {
    this.pessoa = new Pessoa();
    this.pessoa.enderecodto = new Endereco();    

    this.routerx.queryParams.subscribe(params => {
      this.pessoa = JSON.parse(params["pessoa"]);
      });
     // this.pessoa.nome ="jones";
      console.log(this.pessoa);
  }

  salvar(){
    this.service.postPessoa(this.pessoa).subscribe(()=>{
      this.router.navigate(['/tipo-pessoa/list']);
    })
  }

}
