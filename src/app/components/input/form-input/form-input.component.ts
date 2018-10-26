import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {

  texto: string;
  @Output() saida: string;

  constructor() { }

  ngOnInit() {
  }

}
