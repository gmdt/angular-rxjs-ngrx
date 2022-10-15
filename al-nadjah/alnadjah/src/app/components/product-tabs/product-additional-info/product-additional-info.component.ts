import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-additional-info',
  templateUrl: './product-additional-info.component.html',
})
export class ProductAdditionalInfoComponent {
  product: Product | undefined;
}
