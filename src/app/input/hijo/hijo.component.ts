import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  @Input() // Me permite enviar datos desde el componente padre al hijo.
  mensaje: string = ""; // Declaro un mensaje y lo inicializo.
}