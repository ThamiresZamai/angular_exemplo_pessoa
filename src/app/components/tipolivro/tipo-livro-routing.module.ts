import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoLivroListComponent } from './list/tipo-livro-list.component';
import { TipoLivroFormComponent } from './form/tipo-livro-form.component';

const routes: Routes = [
  { path: 'list', component:  TipoLivroListComponent},
  { path: 'form', component: TipoLivroFormComponent},
  { path: 'form/:id', component: TipoLivroFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoLivroRoutingModule { }
