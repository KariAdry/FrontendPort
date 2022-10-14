import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conocimientos } from 'src/app/model/conocimientos';
import { SkillsService } from 'src/app/service/conocimientos.service';

@Component({
  selector: 'app-editconoc',
  templateUrl: './editconoc.component.html',
  styleUrls: ['./editconoc.component.css']
})
export class EditconocComponent implements OnInit {
conocim : Conocimientos= null; 

  constructor(private skillsService: SkillsService, private activatedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit(): void
  {
    const id=this.activatedRoute.snapshot.params['id'];
    this.skillsService.detail(id).subscribe
    (data=>
      {this.conocim = data},
     err=>
     {
      alert("Error al editar el conocimiento");
      this.router.navigate(['']);
     })     
  }

  onUpdate(): void
  {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillsService.update(id, this.conocim).subscribe
    (data=>{this.router.navigate(['']);},
      err=>
      {
        alert("Error al editar la experiencia");
        this.router.navigate(['']);
      })
  }

}
