import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoLivroListComponent } from './tipo-livro-list.component';

describe('TipoLivroListComponent', () => {
  let component: TipoLivroListComponent;
  let fixture: ComponentFixture<TipoLivroListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoLivroListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoLivroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
