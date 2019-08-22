import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: any;
  product: any;

  constructor(private http: HttpClient) { }

  getProducts() {
    this.products = this.http.get('http://localhost:3004/products');
    return this.products;
  }
}
