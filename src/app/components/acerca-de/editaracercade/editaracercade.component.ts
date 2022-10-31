import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/Persona';
import { ImagenService } from 'src/app/service/imagen.service';
import { PersonaService } from 'src/app/service/persona.service';
import { getStorage, ref, deleteObject } from "firebase/storage";

@Component({
  selector: 'app-editaracercade',
  templateUrl: './editaracercade.component.html',
  styleUrls: ['./editaracercade.component.css']
})
export class EditaracercadeComponent implements OnInit {

  persona: Persona = null

  constructor(private activatedRouter: ActivatedRoute,
    private personaService: PersonaService,
    private router: Router,
    public imagenService: ImagenService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.details(1).subscribe
      (data => {
        this.persona = data;

      }, err => {
        alert("Error al modificar la persona");
        this.router.navigate(['']);
      }
      )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    console.log(this.persona);
    this.personaService.update(id, this.persona).subscribe
      (data => {
        this.router.navigate(['']);
      },
        err => {
          alert("Error al editar la persona");
          this.router.navigate(['']);
        })
  }
/********************************************************* */
public loading: boolean = false;

image: any[] = [];

public reader2 = new FileReader();


loadImage(event: any) {


  let files = event.target.files;

  let reader = new FileReader();


  reader.readAsDataURL(files[0]);
  reader.onloadend = () => {
    this.persona.imagenURL.toString();

    console.log(reader.result);

    this.reader2 = reader;
    this.image.push(this.reader2.result);
    console.log(this.persona.imagenPath.toString());

  }
}

public deletefirebase(imagenPath?: string) {
  const storage = getStorage();

  // Create a reference to the file to delete
  const desertRef = ref(storage, "persona/" + imagenPath);
  console.log(desertRef)
  // Delete the file
  deleteObject(desertRef).then(() => {
    console.log("deleted");
  }).catch((error) => {
    console.log(error);
  });
}

load() {

  this.loading = true;

  this.deletefirebase(this.persona.imagenPath);

  this.imagenService.uploadImage(this.persona.imagenPath = "persona" + "_" + Date.now(), this.reader2.result).then(urlImage => {

    this.persona.imagenURL = "";

    console.log(this.persona.imagenURL += urlImage);

    setTimeout(() =>

      this.onUpdate(),

      2000);

  })
    .catch(error => console.error()
    );
}

  /*
  public loading: boolean = false;

  image: any[] = [];


  public reader2 = new FileReader();


  loadImage(event: any) {


    let files = event.target.files;

    let reader = new FileReader();


    reader.readAsDataURL(files[0]);
    reader.onloadend = () => {
      this.persona.imagenURL.toString();

      console.log(reader.result);

      this.reader2 = reader;
      this.image.push(this.reader2.result);
      console.log(this.persona.imagenPath.toString());

    }
  }

  public deletefirebase(imagenPath?: string) {
    const storage = getStorage();

    // Create a reference to the file to delete
    const desertRef = ref(storage, "persona/" + imagenPath);
    console.log(desertRef)
    // Delete the file
    deleteObject(desertRef).then(() => {
      console.log("deleted");
    }).catch((error) => {
      console.log(error);
    });
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

    this.deletefirebase(this.persona.imagenPath);

    this.imagenService.uploadImage(this.persona.imagenPath = "persona" + "_" + Date.now(), this.reader2.result).then(urlImage => {

      this.persona.imagenURL = "";

      console.log(this.persona.imagenURL += urlImage);

      setTimeout(() =>

        this.onUpdate(),

        2000);

    })
      .catch(error => console.error()
      );
  }*/
}





