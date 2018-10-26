import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-inner-component',
  templateUrl: './inner-component.component.html',
  styleUrls: ['./inner-component.component.css']
})
export class InnerComponentComponent implements OnInit {

  @Input()
  textoDoPai: string;

  constructor() { }

  ngOnInit() {
    alert(this.textoDoPai);
  }

}
