import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {
educacion : Educacion = null;

  constructor(private educacionService: EducacionService,
     private activatedRoute: ActivatedRoute, private router: Router) { }

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
        alert("Error al editar la experiencia");
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

}
