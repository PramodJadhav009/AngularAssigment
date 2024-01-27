import { Injectable } from '@angular/core';
import { Product } from '../modules/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Nokia 5.1 Plus', price: 8999 },
    { id: 2, name: 'Samsung A10s', price: 10999 },
    { id: 3, name: 'Redmi Mi note 5 pro', price: 12999 },
    { id: 4, name: 'Vivo Y2', price: 9500 }
  ];
  constructor() { }

  getAllProducts(){
    return this.products;
  }
  getProductById(id: number) {
    return this.products.find(p => p.id === id);
  }
}
