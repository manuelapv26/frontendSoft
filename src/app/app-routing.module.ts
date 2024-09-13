import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/feature-login/pages/login/login.component';
import { ProductsComponent } from './features/feature-login/pages/products/products.component';
import { RegisterComponent } from './features/feature-login/pages/register/register.component';

const routes: Routes = [  
  {path:'',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'products',component:ProductsComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
