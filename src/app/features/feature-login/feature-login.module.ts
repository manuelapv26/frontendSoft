import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureLoginRoutingModule } from './feature-login-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './pages/products/products.component';
import { RegisterComponent } from './pages/register/register.component';


@NgModule({
  declarations: [
    LoginComponent,
    ProductsComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FeatureLoginRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    SharedModule
  ],
  exports:[
    LoginComponent,
    ProductsComponent,
    RegisterComponent
  ]
})
export class FeatureLoginModule { }
