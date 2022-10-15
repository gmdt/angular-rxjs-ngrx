import { Component } from '@angular/core';
import { Product } from '../../../../app/models/product';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
})
export class ProductDescriptionComponent {
  product: Product | undefined;
}
