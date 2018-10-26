import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoProdutoRoutingModule } from './tipo-produto-routing.module';
import { TipoProdutoFormComponent } from './form/tipo-produto-form.component';
import { TipoProdutoListComponent } from './list/tipo-produto-list.component';

@NgModule({
  imports: [
    CommonModule,
    TipoProdutoRoutingModule
  ],
  declarations: [TipoProdutoFormComponent, TipoProdutoListComponent]
})
export class TipoProdutoModule { }
