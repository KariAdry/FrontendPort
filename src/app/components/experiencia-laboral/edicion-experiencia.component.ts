import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienciaLab } from 'src/app/model/experiencia-lab';
import { ServExperienciaService } from 'src/app/service/serv-experiencia.service';

@Component({
  selector: 'app-edicion-experiencia',
  templateUrl: './edicion-experiencia.component.html',
  styleUrls: ['./edicion-experiencia.component.css']
})
export class EdicionExperienciaComponent implements OnInit {
expLab : ExperienciaLab = null;


  constructor(private servExperiencia : ServExperienciaService,
     private activatedRoute :ActivatedRoute, private router : Router) { }

  ngOnInit(): void 
  {
   const id = this.activatedRoute.snapshot.params['id'];
    this.servExperiencia.detail(id).subscribe(
      data =>{
        this.expLab = data;
      },err =>{
        alert("Error en la edicion de experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void
  {
    const id = this.activatedRoute.snapshot.params['id'];
    this.servExperiencia.update(id, this.expLab).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
        alert("Error en la edicion de la experiencia");
        this.router.navigate(['']);
      }
    )
  }

}

