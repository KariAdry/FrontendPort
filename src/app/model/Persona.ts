export class Persona
{
        id : number;
        nombre: string;
        apellido:string;
        descripcion:string;
        imagenURL: string; 
        imagenPath: string;


constructor(nombre:string, apellido: string,descripcion:string, imagenURL:string, imagenPath:string)
{
      this.nombre=nombre;
      this.apellido=apellido;
      this.descripcion=descripcion;
      this.imagenURL=imagenURL;
      this.imagenPath=imagenPath;
}
}