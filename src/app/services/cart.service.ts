import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  private readonly storageKey = 'cart_items';

  private cartSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(this.loadCart());

  constructor() { }

  getCart(): Observable<Product[]> {
    return this.cartSubject.asObservable();
  }

  addProduct(product: Product): void {
    const currentCart = this.cartSubject.value;
    currentCart.push(product);
    this.updateCart(currentCart);
  }

  removeProduct(productId: number): void {
    const updatedCart = this.cartSubject.value.filter(p => p.product_id !== productId);
    this.updateCart(updatedCart);
  }

  clearCart(): void {
    this.updateCart([]);
  }

  getCartCount(): number {
    return this.cartSubject.value.length;
  }

  private loadCart(): Product[] {
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : [];
  }

  private updateCart(cart: Product[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(cart));
    this.cartSubject.next(cart);
  }
}