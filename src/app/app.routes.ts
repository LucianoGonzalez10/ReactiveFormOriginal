import { Routes } from '@angular/router';
import { TareaPageComponent } from './tarea/pages/tarea-page/tarea-page.component';

export const routes: Routes = [
    {
        path: '',
        component: TareaPageComponent // Seteo que cuando la ruta este vacia me renderize el TareaPageComponent.
    },
    
];
