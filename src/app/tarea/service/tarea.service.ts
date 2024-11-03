import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarea } from '../interface/tarea.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' // Este servicio es accesible desde cualquier parte de la aplicacion.
})
export class TareaService {

  constructor(private http: HttpClient) {}

  urlBase: string = 'http://localhost:3000/tareas';

  getTareas(): Observable<Tarea[]>{
    return this.http.get<Tarea[]>(this.urlBase);
  }

  postTareas(tarea : Tarea): Observable<Tarea>{
    return this.http.post<Tarea>(this.urlBase, tarea);
  }

  putTareas(tarea : Tarea, id: number): Observable<Tarea>{
    return this.http.put<Tarea>(`${this.urlBase}/${id}`, tarea);
  }
}
