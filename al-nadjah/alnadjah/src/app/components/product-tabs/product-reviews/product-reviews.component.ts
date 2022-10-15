import { Component } from '@angular/core';
import { Product } from '../../../../app/models/product';

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
})
export class ProductReviewsComponent {
  product: Product | undefined;
}
