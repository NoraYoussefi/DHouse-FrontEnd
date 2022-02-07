import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { User } from 'src/app/models/User';
import { ProductService } from 'src/app/service/product/product.service';
import { AuthService } from 'src/app/service/user/auth.service';

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.scss']
})
export class PublicProfileComponent implements OnInit {

  user!:User
  userId:any
  liveProducts!:Product[]
  publicKey:any

  imgUrl:any //cover image

  constructor(
    private route:ActivatedRoute,
    private authService:AuthService,
    private productService:ProductService
  ) { }

  ngOnInit(): void {
    this.userId=this.route.snapshot.params["id"]
    this.getUserProfile(this.userId) //get user profile data
    this.getLiveProductsForUserProfile(this.userId) //get products of the user

    this.publicKey=window.sessionStorage.getItem("publickey")


    this.imgUrl="../../../../assets/images/profilecover"+String(Math.floor(Math.random() * 8)+1)+".jpg"

  }


  public getUserProfile(id:any){
    this.authService.getUserProfile(id)
    .subscribe(data=>{
      this.user=data
      console.log(data)
    });
  }


  public getLiveProductsForUserProfile(id:any){
    this.productService.getLiveProductsForUserProfile(id)
    .subscribe(data=>{
      this.liveProducts=data
      console.log(data)
    });;
  }


}
