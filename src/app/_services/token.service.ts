import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  deleteToken(): void {
    return localStorage.removeItem('token');
  }

  setTokenJWT(token: string): void {
    localStorage.setItem('TokenJWT', token);
  }

  getTokenJWT(): string {
    return localStorage.getItem('TokenJWT');
  }

  deleteTokenJWT(): void {
    return localStorage.removeItem('TokenJWT');
  }

  setUser(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser(): any {
    return localStorage.getItem('user');
  }

  deleteUser(): void {
    return localStorage.removeItem('user');
  }

}
