import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProductComponent } from './components/molecules/card-product/card-product.component';
import { ButtonComponent } from './components/molecules/button/button.component';
import { SearchComponent } from './components/molecules/search/search.component';
import { SearchButtonComponent } from './components/atoms/search-button/search-button.component';
import { ModalAddProductComponent } from './components/templates/modal-add-product/modal-add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CardProductComponent,
    ButtonComponent,
    SearchComponent,
    SearchButtonComponent,
    ModalAddProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    CardProductComponent,
    ButtonComponent,
    SearchComponent,
    SearchButtonComponent,
    ModalAddProductComponent
  ]
})
export class SharedModule { }
