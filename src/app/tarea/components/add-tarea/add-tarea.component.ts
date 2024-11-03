import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Tarea } from '../../interface/tarea.interface';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TareaService } from '../../service/tarea.service';

@Component({
  selector: 'app-add-tarea',
  standalone: true,
  imports: [ReactiveFormsModule], // Al trabajar con formularios reactivos, debo importar ReactiveFormsModule.
  templateUrl: './add-tarea.component.html',
  styleUrl: './add-tarea.component.css'
})

export class AddTareaComponent {

  @Output() // Permite enviar eventos desde el hijo al padre
  emitirTarea: EventEmitter<Tarea> = new EventEmitter(); // Declaro un objeto de tipo EventEmitter. Clase utilizada junto con @Output para emitir eventos desde un componente hijo hacia su componente padre.

  fb = inject(FormBuilder);
  tareaService = inject(TareaService);

  formulario = this.fb.nonNullable.group({
     nombre: ['', [Validators.required, Validators.minLength(3)]], // Le aclaro con Validators que el campo es requerido y que tiene que tener minimo 3 caracteres.
     id: [0, [Validators.required]] // Le aclaro con Validators que el campo es requerido.
  }) // Declaro un formulario, el cual va a ser igual al fb, el nonNullable no permite campos vacios, y dentro de las llaves van los campos del formulario.

  addTarea(){
    if(this.formulario.invalid) return;

    const tarea = this.formulario.getRawValue()
    this.addTareaDb(tarea);
    this.emitirTarea.emit(tarea); // Al poner {...}, me envia una copia del objeto.
  }

  addTareaDb(tarea: Tarea){
    this.tareaService.postTareas(tarea).subscribe(
      {
        next: (tarea: Tarea) =>{
          console.log(tarea);
          alert('Tarea guardada...');
        },
        error: (e: Error) =>{
          console.log(e.message);
        }
      }
    ); // Es importante suscribirse al servicio.
  }
}
