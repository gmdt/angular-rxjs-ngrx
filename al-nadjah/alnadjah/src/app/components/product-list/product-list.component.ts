import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ResultRequest } from 'src/app/models/result-request';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit, OnDestroy {

  resultData: ResultRequest<Product> | undefined
  @Input() products: Product[] = []

  isDisplayModal: boolean = false
  @Input() isLoading: boolean = true
  modalProduct: Product | undefined


  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {


  }
  ngOnDestroy(){

  }

  getNumber(): number{
    return 3
  }
  handleDeleteProduct(product: Product){
    this.products = this.products.filter(p => p._id !== product._id)
  }
  handleDisplayProductViewModal(product: Product){
    console.log("---------- handleDisplayProductViewModal ---------------------");
    if(product){
      this.isDisplayModal = true
      this.modalProduct = product
    }

  }

  handleCloseModal(){
    this.isDisplayModal = false
    this.modalProduct = undefined
  }

}
