import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInputComponent } from './form-input/form-input.component';
import { InputDecoratorRoutingModule } from './input-decorator-routing.module';
import { InnerComponentComponent } from './inner-component/inner-component.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, 
    InputDecoratorRoutingModule, 
    FormsModule
  ],
  declarations: [FormInputComponent, InnerComponentComponent]
})
export class InputDecoratorModule { }
