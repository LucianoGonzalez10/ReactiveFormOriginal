import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TareaPageComponent } from './tarea/pages/tarea-page/tarea-page.component';
import { PadreComponent } from './input/padre/padre.component';
import { ListTareaComponent } from "./tarea/components/list-tarea/list-tarea.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TareaPageComponent, PadreComponent, ListTareaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gestor-tareas';
}
