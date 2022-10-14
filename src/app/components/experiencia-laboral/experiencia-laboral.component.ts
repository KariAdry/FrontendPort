import { Component, OnInit } from '@angular/core';
import { ExperienciaLab } from 'src/app/model/experiencia-lab';
import { ServExperienciaService } from 'src/app/service/serv-experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {

  expe: ExperienciaLab[] = [];
  constructor(private servExperiencia: ServExperienciaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.servExperiencia.lista().subscribe
      (data => { this.expe = data; })
  }

 borrarExp(id? : number){
    if (id != undefined) 
    {
      this.servExperiencia.delete(id).subscribe
      (
        data => {
          this.cargarExperiencia();}, 
        err => {
          alert("La experiencia no fue eliminada");}
      )
    }
  }

}
