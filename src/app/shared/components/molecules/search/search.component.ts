import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ProductService } from '../../../../features/feature-login/services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  @Output() search = new EventEmitter<string>();

  onSearch(term: string) {
    this.search.emit(term);
  }
  searchTerm: string = ''; // Término de búsqueda
  @Output() productsFiltered = new EventEmitter<any[]>(); // Emitirá los productos filtrados

  @ViewChild('searchInput', { static: false }) searchInput!: ElementRef; // Referencia al input

  constructor(private productService: ProductService) {}

  // Método para buscar productos
  searchProduct() {
    const inputElement = this.searchInput?.nativeElement;
    if (inputElement) {
      this.searchTerm = inputElement.value; // Obtiene el valor del input solo si existe
    } else {
      console.error('searchInput no está definido');
      return;
    }

    if (this.searchTerm.trim() === '') {
      console.warn('El término de búsqueda está vacío.');
      return;
    }

    this.productService.searchProduct(this.searchTerm).subscribe(
      (response) => {
        console.log('Respuesta del backend:', response);
        this.productsFiltered.emit(response); // Emitir los productos filtrados
      },
      (error) => {
        console.error('Error al buscar productos:', error);
        this.productsFiltered.emit([]); // Emitir un array vacío si hay error
      }
    );
  }
}
