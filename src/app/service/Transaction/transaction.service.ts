import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from 'src/app/models/Transaction';


//api-gateway
const TRANSACTIONS_API = 'http://localhost:8090/transactions';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};



@Injectable({
  providedIn: 'root'
})
export class TransactionService {


  constructor(
    private http:HttpClient
  ){ }


  public getUserTransactions():Observable<Transaction[]>{
    return this.http.get<Transaction[]>(TRANSACTIONS_API+'/consulterById');
  }


  public addProduct(transaction:Transaction): Observable<Object> {
    return this.http.post
      (
        TRANSACTIONS_API + '/addTransaction',
        transaction,
        httpOptions
      );
  }






}
