import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoProdutoListComponent } from './list/tipo-produto-list.component';
import { TipoProdutoFormComponent } from './form/tipo-produto-form.component';

const routes: Routes = [
  { path: '', component: TipoProdutoListComponent }, 
  { path: 'create', component: TipoProdutoFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoProdutoRoutingModule { }
