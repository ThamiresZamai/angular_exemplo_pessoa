import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: FormComponent}
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class ReactiveFormsRoutingModule { }
