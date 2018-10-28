import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../service/pessoa.service';
import { Pessoa } from '../../model/pessoa';
import { Endereco } from '../../model/endereco';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tipo-pessoa-list',
  templateUrl: './tipo-pessoa-list.component.html',
  styleUrls: ['./tipo-pessoa-list.component.css']
})
export class TipoPessoaListComponent implements OnInit {

  constructor(
    private service : PessoaService,
    private router : Router
    ) { }

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

  
  excluir(cpf: string){
    this.service.delete(cpf).subscribe(() => this.carregartabela())
  }
  alterar(alt:Pessoa): void{
    //this.pessoa = Object.create(alt); 
    //this.pessoa.nome = "Jones";
   
    this.pessoa = new Pessoa();
    this.pessoa = Object.assign(alt);
    //console.log(this.pessoa);

    let navigationExtras: NavigationExtras = {
      queryParams: {
        "pessoa": JSON.stringify(this.pessoa)
      }
  };

    this.router.navigate(['/tipo-pessoa/form'], navigationExtras);
  }

}
