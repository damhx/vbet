import { Route } from "@angular/router";

export const RENDER_ROUTES: Route[] = [
    {
        path:'',
        loadComponent: ()=> import('./render-component/render-component').then ( (c)=> c.RenderComponent),
        children: [
            {
                path:'',
                loadComponent: ()=> import('./home-component/home-component').then ( (c)=> c.HomeComponent)
            }
        ]
    }
]