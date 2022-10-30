export class Educacion 
{
    id: number;
    nombreEdu: string;
    descripcionEdu:string;
    imagenPath: string;
    imagenURL:string;
    data: any;


constructor(nombreEdu: string, descripcionEdu:string, imagenPath:string, imagenURL:string)
{
    this.nombreEdu = nombreEdu;
    this.descripcionEdu = descripcionEdu;
    this.imagenPath = imagenPath;
    this.imagenURL = imagenURL;
}
}
