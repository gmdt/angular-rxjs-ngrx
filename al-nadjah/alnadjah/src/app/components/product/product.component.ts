import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../../../app/models/product';
import { ResultRequest } from '../../../app/models/result-request';
import { ProductService } from '../../../app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit, OnDestroy {
  slug: string | undefined;
  data: string | undefined = '<p>Data</p>';
  currentImage: string | undefined;
  product: Product | undefined;
  resultData: ResultRequest<Product> | undefined;
  productSub: Subscription | undefined;
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.slug = this.route.snapshot.params['slug'];
    this.productSub = this.productService.getProducts().subscribe({
      next: (resultData: ResultRequest<Product>) => {
        if (resultData.isSuccess) {
          this.product = resultData.results.filter(
            (p) => p.slug === this.slug
          )[0];
          this.currentImage = this.product.imageUrl[0];
          //console.log(this.product);
        }

        this.isLoading = false;
      },
      error: (error: any) => {
        console.log('Error : ', error);
        this.isLoading = true;
      },
    });
    //console.log(this.slug);
  }
  ngOnDestroy(): void {
    this.productSub?.unsubscribe();
  }

  handleChangeCurrentImage(url: string) {
    this.currentImage = url;
  }

  addToCart() {
    console.log(this.product);
  }
}
