import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product.service';

import { Product } from '../../models/product.model';

import { ProductCard } from '../product-card/product-card';
import { SearchProduct } from '../search-product/search-product';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  imports: [
    CommonModule,
    ProductCard,
    SearchProduct,
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})

export class ProductList {

  products$!: Observable<Product[]>;
  private searchTerm = '';

  constructor(private productService: ProductService) {
    this.products$ = this.productService.getProducts();
  }

  onSearch(term: string) {

    this.searchTerm = term.toLowerCase();

    this.products$ = this.productService.getProducts().pipe(
      map(products =>
        products.filter(product =>
          product.name.toLowerCase().includes(this.searchTerm) ||
          product.description.toLowerCase().includes(this.searchTerm)
        )
      )
    );
  }
}