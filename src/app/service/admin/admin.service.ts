import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from '../product/product.service';
import { Web3Service } from '../web3/web3.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  constructor(
    private web3Service:Web3Service,
    private productService:ProductService
  ) { }

  validateProperty(address:string,title:string){

    //set property.verified=true

    //this.web3Service.RegisterProperty(property.ownerAddress,property.title)
    this.web3Service.RegisterProperty(address,title)

  }



}
