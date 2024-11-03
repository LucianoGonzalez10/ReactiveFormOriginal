import { Component } from '@angular/core';
import { HijoComponent } from "../hijo/hijo.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent, FormsModule],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {

  mensajePadre : string = "";

  escribirMensaje(event: any) {
    this.mensajePadre = event.target.value; // Me iguala el mensaje del padre, al valor que devuelva el evento.
  }
}
