import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
})
export class ProductDescriptionComponent {
  product: Product | undefined;
}
