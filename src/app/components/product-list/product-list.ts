import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

import { Product, ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  imports: [
    CommonModule,
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {
  constructor(private productService: ProductService, private cdRef: ChangeDetectorRef) { }

  products: Product[] = [];

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      this.cdRef.detectChanges();

      console.log(this.products);
    });
  }
}