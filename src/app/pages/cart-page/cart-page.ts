import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.css'
})
export class CartPage implements OnInit {

  cartItems: Product[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {

    this.cartService.getCart().subscribe(cart => {
      this.cartItems = cart;
    });

  }

}