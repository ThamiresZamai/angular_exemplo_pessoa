import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoLivroRoutingModule } from './tipo-livro-routing.module';
import { TipoLivroFormComponent } from './form/tipo-livro-form.component';
import { TipoLivroListComponent } from './list/tipo-livro-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TipoLivroRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [TipoLivroFormComponent, TipoLivroListComponent]
})
export class TipoLivroModule { }
