import { Autor } from "./autor";
import { Categoria } from "./categoria";

export class Livro{
    public id : number;
    public titulo : string;
    public dataPublicacao : Date;
    public autordto : Autor;
    public categoriadto : Categoria;
}