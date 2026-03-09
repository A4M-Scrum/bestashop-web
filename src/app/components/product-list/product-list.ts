import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product.service';

import { Product } from '../../models/product.model';

import { ProductCard } from '../product-card/product-card';
import { SearchProduct } from '../search-product/search-product';

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

export class ProductList implements OnInit {

  constructor(
    private productService: ProductService
  ) { }

  products: Product[] = [];
  filteredProducts: Product[] = [];

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      this.filteredProducts = data;
    });
  }

  onSearch(term: string) {

    const search = term.toLowerCase();

    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(search) ||
      product.description.toLowerCase().includes(search)
    );
  }
}