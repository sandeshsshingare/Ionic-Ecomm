import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  URL: string = 'https://shop-api.ngminds.com';
  constructor(private http: HttpClient) {}

  getProductList() {
    return this.http.get(`${this.URL}/shop/products`);
  }
  getProductDetails(productId: any) {
    return this.http.get(`${this.URL}/shop/products/${productId}`);
  }
}
