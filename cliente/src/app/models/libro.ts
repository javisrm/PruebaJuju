export class Libro{
    _id?: number;
    email?: string;
    password?: string
    titulo?: string;
    autor?: string;
    estado?:string | undefined
    anioPublicacion?: Date;





    


    constructor ( titulo: string, autor: string,estado: string,anioPublicacion: Date){
        this.titulo=titulo
        this.autor=autor
        this.estado=estado
        this.anioPublicacion=anioPublicacion
    }
}