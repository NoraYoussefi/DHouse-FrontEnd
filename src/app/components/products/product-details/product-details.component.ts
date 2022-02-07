import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { Transaction } from 'src/app/models/Transaction';
import { User } from 'src/app/models/User';
import { ProductService } from 'src/app/service/product/product.service';
import { TransactionService } from 'src/app/service/Transaction/transaction.service';
import { TokenService } from 'src/app/service/user/token.service';
import { Web3Service } from 'src/app/service/web3/web3.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {


  product!:Product
  user!:User

  username:any="oswaldo";
  priceeth:any="2";

  transaction!:Transaction




  constructor(
    private web3service:Web3Service,
    private productService:ProductService,
    private route:ActivatedRoute,
    private transactionService:TransactionService,
    private router:Router,
    private tokenService:TokenService
  ) {}



  ngOnInit(): void {
    this.getProduct(this.route.snapshot.params["id"]) //get product
    this.getUser()
  }



  getProduct(id:any){
    this.productService.getProductById(id).subscribe(
      data=>{
        this.product=data
        console.log(this.product)
      }
    );
  }





  //sellerAddress,buyerAddress,priceeth,productId,govTitle
  buyProperty(sellerId:any,productId:any,priceEth:any,govTitle:any,sellerAddress:any){

    //adding transaction to mongodb
    this.transaction=new Transaction(this.user.id,sellerId,productId,"5")

    //set product to sold
    this.setProductToSold(productId)

    //create transaction
    this.addTransaction(this.transaction)

    //change ownership & transfer funds
    this.web3service.BuyProperty(govTitle,"5",sellerAddress)

  }





  //add transaction in mongodb
  public addTransaction(transaction:Transaction){
    this.transactionService.addProduct(transaction)
    .subscribe(
      data => {
        console.log(data)
      },
      err => {
        console.log(err)
      }
    )
  }



  public setProductToSold(id:any){
    this.productService.setProductToSold(id)
    .subscribe(
      data => {
        console.log(data)
      },
      err => {
        console.log(err)
      }
    );;
  }






  public getUser(){
    this.user=this.tokenService.getUser()
  }

}

