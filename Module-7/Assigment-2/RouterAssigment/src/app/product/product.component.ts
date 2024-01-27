import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../modules/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:Product[];

  constructor(private productService: ProductService) { 
    this.products = [];
  }

  ngOnInit() {
    this.products = this.productService.getAllProducts();
  }
  
}
