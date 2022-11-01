import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/Persona';
import { ImagenService } from 'src/app/service/imagen.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-nuevacercade',
  templateUrl: './nuevacercade.component.html',
  styleUrls: ['./nuevacercade.component.css']
})
export class NuevacercadeComponent implements OnInit {
nombre: string='';
apellido: string='';
descripcion: string='';
imagenPath: string='';
imagenURL: string='';

public loading: boolean = true;

  constructor(private personaService: PersonaService,
     private router: Router,
     private imagenService: ImagenService) { }

  ngOnInit(): void {
  }

  onCreate():void
  {
   const person = new Persona(this.nombre, this.apellido, this.descripcion, this.imagenPath, this.imagenURL);
   console.log("gfhnjdt"+ person);
   this.personaService.save(person).subscribe
    (data=>{
      alert("Persona agregada");
      this.router.navigate(['']);
    }, err=>{
      alert("No pudo agregarse la persona");
      this.router.navigate(['']);
    })
  }

  imagen: any[] = [];

  public reader2= new FileReader();

  loadImage(event:any)
  {
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

  input1 = '';
  input2 = '';

  getValue1(value:string)
  {
    console.warn(value);
    this.input1 = value;

    if(this.input1!='' && this.input2!='')
    {
      this.loading=false;
    }
    else{
      this.loading =true;
    }
  }

  getValue2(value:string)
  {
    console.warn(value);
    this.input2 = value;

    if(this.input1!='' && this.input2!='')
    {
      this.loading=false;
    }
    else{
      this.loading =true;
    }
  }

  load()
  {
    this.loading=true;
    this.imagenService.uploadImage(this.imagenPath="persona"+"_"+Date.now(), this.reader2.result)
    .then(urlImage=> {
      this.imagenURL = "";
      console.log(this.imagenURL+= urlImage);

      setTimeout(() =>
      this.onCreate(),
      1000);
    })
    .catch(error => console.error()
    );
  }

}
