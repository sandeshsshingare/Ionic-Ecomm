import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  URL = 'http://localhost:8080';
  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post(`${this.URL}/shop/auth/login`, data);
  }

  register(data: any) {
    return this.http.post(`${this.URL}/shop/auth/register`, data);
  }
}
