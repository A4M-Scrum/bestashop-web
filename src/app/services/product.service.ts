import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// modelo provisional
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private readonly productsUrl = 'assets/products.json'; // en un futuro, se sustiuirá por la URL de la API

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Product[]>(this.productsUrl);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return new Observable(observer => {
      this.getProducts().subscribe(products => {
        const product = products.find(p => p.id === id);
        observer.next(product);
        observer.complete();
      });
    });
  }
}
