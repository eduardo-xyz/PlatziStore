import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product: Product = {
    id: 1,
    name: 'Camisa',
    price: 19.99
  };

  constructor() { }

  ngOnInit() {
  }

}
