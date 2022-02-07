import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { User } from 'src/app/models/User';
import { ProductService } from 'src/app/service/product/product.service';
import { TokenService } from 'src/app/service/user/token.service';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.scss']
})
export class AnnoncesComponent implements OnInit {

  products!:Product[]
  user!:User

  OneEth:any

  priceeth!:number

  constructor(
    private productService:ProductService,
    private tokenService:TokenService) { }

  ngOnInit(): void {
    this.user=this.tokenService.getUser()
    this.getLiveProducts()
    this.OneEth=this.productService.OneEth
  }


  public getLiveProducts(){
    this.productService.getExploreProducts().subscribe(
      data=>{
        this.products=data
        console.log(data)
      });
  }











}
