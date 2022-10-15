import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../app/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product: Product | undefined;
  @Output() deleteProductItem: EventEmitter<Product> =
    new EventEmitter<Product>();
  @Output() displayProductViewModal: EventEmitter<Product> =
    new EventEmitter<Product>();

  handleClickProduct(product: Product | undefined) {
    this.displayProductViewModal.emit(product);
  }

  deleteProduct(product: Product | undefined) {}
}
