import { Component, OnInit } from '@angular/core';
import { getStorage, ref, deleteObject } from '@angular/fire/storage';
import { Persona } from 'src/app/model/Persona';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html', 
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
pers: Persona[] = [];

 constructor(public personaService:PersonaService, private tokenService:TokenService){ }
   isLogged=false;

  ngOnInit(): void
  {
    this.cargarPersona();
    if(this.tokenService.getToken())
    {
      this.isLogged = true;
    }else
    {
      this.isLogged = false;
    }
  }

  cargarPersona(): void
  {
    this.personaService.lista().subscribe
    (data => 
      {
        this.pers = data;
      })
  }

  borrarPersona(id:number)
  {
    if(id != undefined)
    {
      this.personaService.delete(id).subscribe
      (data =>
      {
        this.cargarPersona();
      }, err=>
      {
        alert("La persona no fue eliminada");
      })
    }
  }

  public deleteFirebase(imagenPath?: string) {
    const storage = getStorage();

    const desertRef = ref(storage, "persona/" + imagenPath);
    console.log(desertRef)
    // Delete the file
    deleteObject(desertRef).then(() => {
      console.log("File deleted successfully")
    }).catch((error) => {
      console.log(error)
    });
  }


  async delete(id?: number, imagenPath?: string) {
    if (id != undefined) {

      //await this.storage.deletefirebase(imagenPath);
      await this.deleteFirebase(imagenPath);


      setTimeout(() =>

        this.personaService.delete(id).subscribe(
          data => {
            this.cargarPersona();

          }, err => {
            alert("Error al eliminar");
          }
        ), 1000);

    }

  }

}


