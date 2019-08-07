import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService) {
    this.products = this.productService.getAll();
  }

  ngOnInit() {
  }

  productSelected(id: number) {
    console.info('Product selected ' + id);
  }

  filter(query: string) {
    this.products = this.productService.getAll().filter(
      product => product.name.includes(query)
    );
  }

}
