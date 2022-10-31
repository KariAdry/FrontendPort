import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Conocimientos } from '../model/conocimientos';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
//URL= 'https://datosportfolio.herokuapp.com/cono/';
URL= 'https://basedatport.herokuapp.com/cono/';
//URL = environment.URL + 'cono/';
//URL='http://localhost:8080/cono/';

  constructor(private httpClient : HttpClient) { }

public lista(): Observable <Conocimientos[]>
{
  return this.httpClient.get<Conocimientos[]>(this.URL + `lista`);
}

public detail(id:number):Observable <Conocimientos>
{
  return this.httpClient.get<Conocimientos>(this.URL + `detail/${id}`);
}  

public save(conocimientos:Conocimientos): Observable <any>
{
 return this.httpClient.post<any>(this.URL + `create`,conocimientos);
}

public update(id:number, conocimientos:Conocimientos):Observable <any>
{
  return this.httpClient.put<any>(this.URL + `update/${id}`,conocimientos);
}

public delete(id: number):Observable<any>
{
  return this.httpClient.delete<any>(this.URL + `delete/${id}`);
}
}

