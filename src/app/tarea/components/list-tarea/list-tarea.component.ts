import { Component, inject, OnInit } from '@angular/core';
import { Tarea } from '../../interface/tarea.interface';
import { AddTareaComponent } from '../add-tarea/add-tarea.component';
import { TareaService } from '../../service/tarea.service';

@Component({
  selector: 'app-list-tarea',
  standalone: true,
  imports: [AddTareaComponent],
  templateUrl: './list-tarea.component.html',
  styleUrl: './list-tarea.component.css'
})

export class ListTareaComponent implements OnInit{

  ngOnInit(): void {
      this.listarTareas();
  }

  listaTarea : Tarea[] = [];

  tareaService = inject(TareaService);

  agregarLista(tarea: Tarea){
    this.listaTarea.push({...tarea}); // Me agrega la tarea a la lista.
  }

  listarTareas(){
    this.tareaService.getTareas().subscribe(
      {
        next: (tareas: Tarea[]) =>{
          this.listaTarea = tareas;
        },
        error: (e: Error) =>{
          console.log(e.message);
        }
      }
    )
  }
}
