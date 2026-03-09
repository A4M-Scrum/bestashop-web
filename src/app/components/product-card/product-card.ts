import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Product } from '../../models/product.model';

import { OfferService } from '../../services/offer.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class ProductCard {
  @Input() product!: Product;

  constructor(public offerService: OfferService) { }
}