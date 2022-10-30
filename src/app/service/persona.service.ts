import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
//URL = 'https://datosportfolio.herokuapp.com/personas/';
//URL = 'https://basedatport.herokuapp.com/persona/';
//URL = environment.URL + 'persona/';
URL='http://localhost:8080/persona/';

  constructor(private httpClient: HttpClient) { }

public lista(): Observable<Persona[]> 
{
 return this.httpClient.get<Persona[]>(this.URL + `lista`)
}

public details(id:number):Observable<Persona>
{
  return this.httpClient.get<Persona>(this.URL + `details/${id}`);
}

public save(persona: Persona): Observable<any>
{
  return this.httpClient.post<any>(this.URL + `crear`, persona);
}

public update(id: number ,persona:Persona): Observable<any>
{
  console.log(persona);
  return this.httpClient.post<any>(this.URL + `update/${id}`, persona);
}

public delete(id:number):Observable<any>
{
  return this.httpClient.delete<any>(this.URL + `delete/${id}`);
}
 }


