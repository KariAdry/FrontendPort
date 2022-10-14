import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conocimientos } from 'src/app/model/conocimientos';
import { SkillsService } from 'src/app/service/conocimientos.service';


@Component({
  selector: 'app-nuevo-conoc',
  templateUrl: './nuevo-conoc.component.html',
  styleUrls: ['./nuevo-conoc.component.css']
})
export class NuevoConocComponent implements OnInit {
  nombreCo: string= '';
  porcentajeCo: number;

  constructor(private skillsService : SkillsService, private router : Router) { }

  ngOnInit(): void { }

  onCreate(): void
  {
    const conoc = new Conocimientos(this.nombreCo, this.porcentajeCo);

    this.skillsService.save(conoc).subscribe
    (data=> {
        alert("Conocimiento agregado correctamente");
        this.router.navigate(['']);
      }, err=> {
        alert("No se pudo agregar al conocimiento");
        this.router.navigate(['']);
      })
  }

}





