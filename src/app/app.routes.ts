import { Routes } from '@angular/router';
import { RENDER_ROUTES } from './core/RenderCore/render.routes';

export const routes: Routes = [
    {
        path: '',
        children: RENDER_ROUTES
    }
];
