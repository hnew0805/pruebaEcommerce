import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcommerceService } from './services/ecommerce.service';
import { EcommerceComponent } from './components/ecommerce/ecommerce.component';
import { InicioComponent } from './components/inicio/inicio.component';


const routes: Routes = [
  {path: 'servicios', component: EcommerceService},
  {path: 'ecommerce', component: EcommerceComponent},
  {path:'inicio', component:InicioComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }