import { Component, Input } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductsDetails } from '../../models/products.models';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  
  products: ProductsDetails[] = [];
  isModalOpen = false;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  async loadProducts() {
    try {
      this.products = await this.productService.getProducts();
    } catch (error) {
      console.error('Error al cargar productos', error);
    }
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.loadProducts(); // Actualiza la lista de productos después de cerrar el modal
  }
}
