import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductService } from '../../../../features/feature-login/services/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-add-product',
  templateUrl: './modal-add-product.component.html',
  styleUrl: './modal-add-product.component.scss'
})
export class ModalAddProductComponent {
  productForm!: FormGroup;

  @Output() close = new EventEmitter<void>();

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.productForm = this.fb.group({
      nameP: ['', Validators.required],
      descriptionP: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]]
    });    
  }

  addProduct(): void {
    if (this.productForm.valid) {
      const product = this.productForm.value;
      console.log(product);
      
      this.productService.addProduct(product).then(() => {
        console.log('Product added:', product);
        this.close.emit(); // Close the modal and notify the parent component
      }).catch(error => {
        console.error('Error adding product', error);
      });
    }
  }
}
