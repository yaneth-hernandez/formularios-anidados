import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './pages/producto/producto.component';
import { AuthGuard } from './guardianes/auth.guard';
import { InicioComponent } from './pages/inicio/inicio.component';


const routes: Routes = [
  {
    path:'inicio',
    component:InicioComponent, 
  }, 
  {
    path:'producto/:id',
    component:ProductoComponent, 
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
