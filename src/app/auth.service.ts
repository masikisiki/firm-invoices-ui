import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly TOKEN_KEY = 'AUTH_TOKEN';

  constructor(private router: Router) {}

  setAuthToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getAuthToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  removeAuthToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    const token = this.getAuthToken();
    return !!token;
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigate(['login']).then(()=>{});
  }
}
