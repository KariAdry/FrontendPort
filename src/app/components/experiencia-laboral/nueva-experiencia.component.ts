import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaLab } from 'src/app/model/experiencia-lab';
import { ServExperienciaService } from 'src/app/service/serv-experiencia.service';

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css']
})
export class NuevaExperienciaComponent implements OnInit
 {
nombreExp : string = '';
descripcionExp : string = '';

  constructor(private servExperiencia: ServExperienciaService, private router: Router){ }

  ngOnInit(): void {

  }

  onCreate ():void
{
  const expe = new ExperienciaLab (this.nombreExp, this.descripcionExp);
  this.servExperiencia.save(expe).subscribe
   (data => {
    alert("Experiencia agregada");
    this.router.navigate(['']);
  }, err => {
    alert("Accion fallida");
    this.router.navigate(['']);
  })
}
}