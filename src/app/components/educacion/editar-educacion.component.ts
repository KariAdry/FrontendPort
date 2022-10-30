import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { ImagenService } from 'src/app/service/imagen.service';
import { getStorage, ref, deleteObject } from "firebase/storage";

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {
educacion : Educacion = null;

  constructor(private educacionService: EducacionService,
     private activatedRoute: ActivatedRoute,
      private router: Router,
      private imagenService: ImagenService
      ) { }

  ngOnInit(): void
  {
    const id = this.activatedRoute.snapshot.params['id'] ;
    this.educacionService.detail(id).subscribe
    (data=>
   {
      this.educacion = data;
    },
    err=>
    {
        alert("Error al editar la instruccion");
        this.router.navigate(['']);
    }
    ) 
  }

  onUpdate():void
  {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educacionService.update(id, this.educacion).subscribe
    (
      data=>
      {
        this.router.navigate(['']);
      },
      err =>
      {
        alert("La instruccion no pudo ser actualizada");
        this.router.navigate(['']);
      }
    )
  }

  public loading: boolean = false;

  image: any[] = [];


  public reader2 = new FileReader();


  loadImage(event: any) {


    let files = event.target.files;

    let reader = new FileReader();


    reader.readAsDataURL(files[0]);
    reader.onloadend = () => {
      this.educacion.imagenURL.toString();

      console.log(reader.result);

      this.reader2 = reader;
      this.image.push(this.reader2.result);
      console.log(this.educacion.imagenPath.toString());

    }
  }

  public deletefirebase(imagenPath?: string) {
    const storage = getStorage();

    // Create a reference to the file to delete
    const desertRef = ref(storage, "educacion/" + imagenPath);
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

    this.deletefirebase(this.educacion.imagenPath);

    this.imagenService.uploadImage(this.educacion.imagenPath = "educacion" + "_" + Date.now(), this.reader2.result).then(urlImage => {

      this.educacion.imagenURL = "";

      console.log(this.educacion.imagenURL += urlImage);

      setTimeout(() =>

        this.onUpdate(),

        2000);

    })
      .catch(error => console.error()
      );
  }

}
