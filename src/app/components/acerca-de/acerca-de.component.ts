import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/Persona';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
pers: Persona = null;

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
    this.personaService.details(1).subscribe
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
}


