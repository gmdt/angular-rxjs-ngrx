import { Component, Input } from '@angular/core';
import { Product } from '../../../app/models/product';
import * as resultRequest from '../../../app/models/result-request';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  resultData: resultRequest.ResultRequest<Product> | undefined;
  @Input() products: Product[] = [];

  isDisplayModal: boolean = false;
  @Input() isLoading: boolean = true;
  modalProduct: Product | undefined;

  getNumber(): number {
    return 3;
  }
  handleDeleteProduct(product: Product) {
    this.products = this.products.filter((p) => p._id !== product._id);
  }
  handleDisplayProductViewModal(product: Product) {
    if (product) {
      this.isDisplayModal = true;
      this.modalProduct = product;
    }
  }

  handleCloseModal() {
    this.isDisplayModal = false;
    this.modalProduct = undefined;
  }
}
