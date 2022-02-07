import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';

//api-gateway
const AUTH_API = 'http://localhost:8683/api/auth';

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
    return this.http.post(AUTH_API + '/signin', {
      username,
      password
    },
    httpOptions);
    
  }


  register(username:string,email:string,password:any): Observable<any> {
    return this.http.post(AUTH_API + '/signup', {
      username,
      email,
      password
    },
    httpOptions
    );
  }


  getUserProfile(id:any):Observable<User>{
    return this.http.get<User>(AUTH_API+'/user/'+id);
  }


}
