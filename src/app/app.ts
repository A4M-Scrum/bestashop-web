import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ProductList } from './components/product-list/product-list';
import { Register } from './components/register/register';
import { Login } from './components/login/login';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    ProductList,
    Register,
    Login,
  ], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('bestashop-web');
}
