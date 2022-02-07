import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

const TOKEN_KEY = 'token';
const USER_KEY = 'user';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor(private route:Router) { }

  signOut(): void {
    window.sessionStorage.clear();
    window.location.href="/home"
  }

  signedIn(){
    return this.getToken()!=undefined ? true : false;
  }

  signedInAsAdmin(){
    return this.signedIn() && this.getUser().roles[0]=='ROLE_ADMIN' ? true : false;
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }
}
