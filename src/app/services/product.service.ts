import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {id: 1, name: 'Camisa', price: 16.99},
    {id: 2, name: 'Taza', price: 5.99},
    {id: 3, name: 'Sticker', price: 3.99}
  ]
  constructor() { }

  getAll(): Product[] {
    return this.products
  }

  getById(id: number): Product {
    return this.products.find(
      product => product.id === id
    );
  }
}
