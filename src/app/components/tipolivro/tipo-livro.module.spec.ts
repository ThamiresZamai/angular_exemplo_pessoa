import { TipoLivroModule } from './tipo-livro.module';

describe('TipoLivroModule', () => {
  let tipoLivroModule: TipoLivroModule;

  beforeEach(() => {
    tipoLivroModule = new TipoLivroModule();
  });

  it('should create an instance', () => {
    expect(tipoLivroModule).toBeTruthy();
  });
});
