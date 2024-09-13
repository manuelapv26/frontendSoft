import { Component } from '@angular/core';
import { ProductService } from '../../../../features/feature-login/services/product.service';
import { ProductsDetails } from '../../../../features/feature-login/models/products.models';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent {
  products: ProductsDetails[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().then(
      (data: ProductsDetails[]) => {
        this.products = data;
      },
      err => {
        console.error('Error en la solicitud', err);
      }
    );
  }
 
  deleteProduct(product: ProductsDetails) {
    console.log('Producto a eliminar:', product);
    if (product.id) {
      this.productService.deleteProduct(product.id).subscribe(
        () => {
          this.products = this.products.filter(p => p.id !== product.id);
          console.log(`Producto ${product.nameP} eliminado`);
        },
        (error) => {
          console.error('Error al eliminar el producto', error);
        }
      );
    } else {
      console.error('El producto no tiene un ID definido:', product);
    }
  }
  
}
