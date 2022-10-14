import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-nueva-instruccion',
  templateUrl: './nueva-instruccion.component.html',
  styleUrls: ['./nueva-instruccion.component.css']
})
export class NuevaInstruccionComponent implements OnInit {
nombreEdu: string ='';
descripcionEdu: string ='';

  constructor(private educacionService: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void 
  {
    const edu = new Educacion(this.nombreEdu, this.descripcionEdu);
   // console.log(edu);

    this.educacionService.save(edu).subscribe 
    (data =>{
      alert("Instruccion agregada");
      this.router.navigate(['']);
      }, err=>{
        alert("No se pudo cargar una instruccion");
        this.router.navigate(['']);
      })
  }

}
