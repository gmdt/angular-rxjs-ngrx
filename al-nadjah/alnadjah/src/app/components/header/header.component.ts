import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { auth_items, nav_items } from 'src/app/api/nav';
import { Item } from 'src/app/models/item';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  data: Number | undefined;
  second: Number | undefined;
  secondSub: Subscription | undefined;
  siteName: string = environment.siteName;
  navData: Item[] = nav_items;
  authData: Item[] = auth_items;
  isDisplayMobileNav: boolean = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.secondSub = this.productService.getSecond().subscribe({
      next: (value: Number) => {
        this.second = value;
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log('Complete');
      },
    });
  }

  ngOnDestroy(): void {
    this.secondSub?.unsubscribe();
  }

  handleDisplayMobileNav() {
    console.log(this.isDisplayMobileNav);

    this.isDisplayMobileNav = !this.isDisplayMobileNav;
  }
  handleCloseMobileNav() {
    this.isDisplayMobileNav = false;
  }
}
