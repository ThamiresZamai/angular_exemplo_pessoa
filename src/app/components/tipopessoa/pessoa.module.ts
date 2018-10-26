import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaRoutingModule } from './pessoa-routing.module';
import { TipoPessoaFormComponent } from './form/tipo-pessoa-form.component';
import { TipoPessoaListComponent } from './list/tipo-pessoa-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PessoaRoutingModule,
    FormsModule
  ],
  declarations: [TipoPessoaFormComponent, TipoPessoaListComponent]
})
export class PessoaModule { }
