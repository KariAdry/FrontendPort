import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { ImagenService } from 'src/app/service/imagen.service';


@Component({
  selector: 'app-nueva-instruccion',
  templateUrl: './nueva-instruccion.component.html',
  styleUrls: ['./nueva-instruccion.component.css']
})
export class NuevaInstruccionComponent implements OnInit {
nombreEdu: string ='';
descripcionEdu: string ='';
imagenPath: string = '';
imagenURL: string = '';

public loading: boolean = true;

  constructor(private educacionService: EducacionService, private router: Router, private imagenService: ImagenService) { }

  ngOnInit(): void {
  }

  onCreate(): void 
  {
    const edu = new Educacion(this.nombreEdu, this.descripcionEdu, this.imagenPath, this.imagenURL);
   // console.log(edu);

    this.educacionService.save(edu).subscribe 
    (data =>{
      alert("Instruccion agregada");
      this.router.navigate(['']);
      }, err=>{
        alert("No se pudo cargar una instruccion");
        this.router.navigate(['']);
      })
  }

  imagen: any[] = [];

  public reader2= new FileReader();

  loadImage(event: any) {
    let files = event.target.files;
    let reader = new FileReader();

    reader.readAsDataURL(files[0]);
    reader.onloadend = () => {
      this.imagenURL.toString();

      console.log(reader.result);

      this.reader2=reader;
      this.imagen.push(this.reader2.result);
    }
}

input1='';
input2='';

getValue1(value:string){
  console.warn(value);
  this.input1=value;
  if (this.input1!='' && this.input2!='') {
    this.loading=false;
  }
  else{
    this.loading=true;
  }
}

getValue2(value:string){
  console.warn(value);
  this.input2=value;
  if (this.input1!='' && this.input2!='') {
    this.loading=false;
  }
  else{
    this.loading=true;
  }
}

load() {
  this.loading = true;
  this.imagenService.uploadImage(this.imagenPath="educacion"+"_"+Date.now(), this.reader2.result)
  .then(urlImage => {
    this.imagenURL = "";
    console.log(this.imagenURL+=urlImage);

    setTimeout(() =>
      this.onCreate(), 
      1000);
    })
    .catch(error => console.error()
    );

  }

}
