import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

//api-gateway
const AUTH_API = 'http://localhost:9191/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};




@Injectable({
  providedIn: 'root'
})


export class AuthService {


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'connexion/auth', {
      username,
      password
    },
    httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'connexion/subs', {
      username,
      email,
      password
    },
    httpOptions
    );
  }


}
