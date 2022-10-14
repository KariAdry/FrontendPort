import { Component, OnInit } from '@angular/core';
import { Conocimientos } from 'src/app/model/conocimientos';
import { SkillsService } from 'src/app/service/conocimientos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-conocimientos',
  templateUrl: './conocimientos.component.html',
  styleUrls: ['./conocimientos.component.css']
})
export class ConocimientosComponent implements OnInit {

conocim: Conocimientos[]=[];

  constructor(private skillsService:SkillsService, private tokenService:TokenService) { }

  isLogged= false;
  

  ngOnInit(): void 
  {
    this.cargarConoc();
    if(this.tokenService.getToken())
    {
      this.isLogged = true;
    }
    else
    {
      this.isLogged= false;
    }
  }

  cargarConoc(): void
  {
    this.skillsService.lista().subscribe
    (
      data=>
      {
        this.conocim = data;
      })
  }

  borrarConoc(id:number)
  {
    if(id != undefined)
    {
      this.skillsService.delete(id).subscribe
      (
        data=>
        {
          this.cargarConoc();
        },err=>
        {
          alert("El conocimiento no fue eliminado");
        }
      )
    }
  }

}
