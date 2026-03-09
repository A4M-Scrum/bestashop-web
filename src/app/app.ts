import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ProductList } from './components/product-list/product-list';
import { Register } from './components/register/register';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    ProductList,
    Register,
  ], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('bestashop-web');
}
