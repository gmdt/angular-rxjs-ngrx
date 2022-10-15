import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-vendor',
  templateUrl: './product-vendor.component.html',
})
export class ProductVendorComponent {
  product: Product | undefined;
}
