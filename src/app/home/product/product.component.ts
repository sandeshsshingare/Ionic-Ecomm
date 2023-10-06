import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  productList: any[] = [];
  menuItem: boolean = false;
  constructor(private homeService: HomeService, private router: Router) {}

  ngOnInit() {
    this.getProduct();
  }

  menuButtonClicked() {
    this.menuItem = !this.menuItem;
  }

  getProduct() {
    console.log('get product called');
    this.homeService.getProductList().subscribe({
      next: (data: any) => {
        console.log(data);
        this.productList = data.results;
      },
    });
  }
  itemClicked(productId: any) {
    this.router.navigate(['/customer/home/product-details/' + productId]);
  }
}
