import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoLivroFormComponent } from './tipo-livro-form.component';

describe('TipoLivroFormComponent', () => {
  let component: TipoLivroFormComponent;
  let fixture: ComponentFixture<TipoLivroFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoLivroFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoLivroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
