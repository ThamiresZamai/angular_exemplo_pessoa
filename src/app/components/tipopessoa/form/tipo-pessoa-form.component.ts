import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../model/pessoa';
import { PessoaService } from '../../service/pessoa.service';
import { Router } from '@angular/router';
import { Endereco } from '../../model/endereco';

@Component({
  selector: 'app-tipo-pessoa-form',
  templateUrl: './tipo-pessoa-form.component.html',
  styleUrls: ['./tipo-pessoa-form.component.css']
})
export class TipoPessoaFormComponent implements OnInit {

  pessoa : Pessoa;
  endereco : Endereco;
  constructor(
    private service : PessoaService,
    private router : Router
    ) { }

  ngOnInit() {
    this.endereco = new Endereco();
    this.pessoa=new Pessoa();
    this.pessoa.endereco = new Endereco();
  }

  salvar(){
    this.service.postPessoa(this.pessoa).subscribe(()=>{
      this.router.navigate(['/tipo-pessoa/list']);
    })
  }
}
