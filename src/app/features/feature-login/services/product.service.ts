import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductsDetails } from '../models/products.models';
import axios from 'axios';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:10101/api/products';
  private apiUrl2 = 'http://localhost:10101/api/productsCreate';
  private apiUrl3=  'http://localhost:10101/api/products'

  constructor(private http: HttpClient) { }

  getProducts(): Promise<ProductsDetails[]> {
    const token = localStorage.getItem('token'); // Obtiene el token del localStorage

    if (!token) {
      throw new Error('No se ha encontrado el token de autenticación');
    }

    // Añade el token a los encabezados de la solicitud
    return axios.get(this.apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      const data = response.data;
      const products: ProductsDetails[] = data.map((product: any) => new ProductsDetails(
        product.nameP,
        product.descriptionP,
        product.price,
        product.id
      ));
      return products;
    })
    .catch(error => {
      throw error;
    });
  }
  
  addProduct(product: ProductsDetails): Promise<void> {
    const token = localStorage.getItem('token'); // Obtiene el token del localStorage

    if (!token) {
      throw new Error('No se ha encontrado el token de autenticación');
    }

    // Añade el token a los encabezados de la solicitud
    return axios.post(this.apiUrl2, product, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    .then(() => {
      console.log('Producto añadido con éxito');
      window.location.reload()
    })
    .catch(error => {
      console.error('Error al añadir el producto', error);
      throw error;
    });
  }

  deleteProduct(id: number): Observable<void> {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No se ha encontrado el token de autenticación');
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    const url = `${this.apiUrl3}/${id}`;

    return this.http.delete<void>(url, { headers }).pipe(
      catchError(error => {
        console.error('Error al eliminar el producto:', error);
        return throwError(error);
      })
    );
  }
}


