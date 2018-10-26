import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormInputComponent } from './form-input/form-input.component';

const routes: Routes = [
  {path: '', component: FormInputComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ], 
  declarations: []
})
export class InputDecoratorRoutingModule { }
