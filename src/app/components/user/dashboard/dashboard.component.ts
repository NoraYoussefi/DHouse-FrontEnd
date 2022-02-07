import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { Transaction } from 'src/app/models/Transaction';
import { User } from 'src/app/models/User';
import { ProductService } from 'src/app/service/product/product.service';
import { TransactionService } from 'src/app/service/Transaction/transaction.service';
import { TokenService } from 'src/app/service/user/token.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userId!:any;

  user!:User
  publicKey:any

  SoldProducts!:Product[]
  LiveProducts!:Product[]
  NonVerifiedProducts!:Product[]
  transactions!:Transaction[]




  constructor(
    private productService:ProductService,
    private route:ActivatedRoute,
    private router:Router,
    private userService:UserService,
    private tokenService:TokenService,
    private transactionService:TransactionService
  ) {}



  ngOnInit(): void {
    this.getUser() //get current logged in user
    this.getSoldProductsByUserId()
    this.getLiveProductsByUserId()
    this.getNonVerifiedProductsByUserId()
    this.getTransctionByUserId()
    this.getUserTransactions()



    this.publicKey=window.sessionStorage.getItem("publickey")
  }



  public getSoldProductsByUserId(){
    this.productService.getSoldProductsByUserId().subscribe(
    data=>{
      this.SoldProducts=data
      console.log(this.SoldProducts)
    }
    );
  }

  public getLiveProductsByUserId(){
    this.productService.getLiveProductsByUserId().subscribe(data=>{

      this.LiveProducts=data

      console.log(this.LiveProducts)
    });
  }

  public getNonVerifiedProductsByUserId(){
    this.productService.getAllNonVerifiedProductsbyUserId().subscribe(data=>{

      this.NonVerifiedProducts=data
      console.log(this.NonVerifiedProducts)
    });
  }



  public getTransctionByUserId(){
    //this.productService.getTransactionByUserId().subscribe(data=>{this.transactions=data});
  }



  public getUser(){
    this.user=this.tokenService.getUser()
    this.userId=this.user.id
  }





  //get user transactions
  public getUserTransactions(){
    this.transactionService.getUserTransactions()
    .subscribe(data=>{
      this.transactions=data
      console.log(this.transactions)
    });
  }



}



