import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { User } from 'src/app/models/User';
import { AdminService } from 'src/app/service/admin/admin.service';
import { ProductService } from 'src/app/service/product/product.service';
import { AuthService } from 'src/app/service/user/auth.service';
import { TokenService } from 'src/app/service/user/token.service';
import { Web3Service } from 'src/app/service/web3/web3.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  nonVerifiedProducts!:Product[]
  admin!:User

  constructor(
    private adminService:AdminService,
    private productService:ProductService,
    private web3Service:Web3Service,
    private authService:AuthService,
    private tokenService:TokenService
    ) { }



  ngOnInit(): void {
    this.getAllNonVerifiedProducts() //get all non verified products
    this.getAdminProfile(this.tokenService.getUser().id)
  }


  //get all non verified products
  getAllNonVerifiedProducts(){
    this.productService.getAllNonVerifiedProducts()
    .subscribe(
        data=>{
          this.nonVerifiedProducts=data
        }
    );
  }


  public getAdminProfile(id:any){
    this.authService.getUserProfile(id)
    .subscribe(data=>{
      this.admin=data
      console.log(data)
    });
  }


  //product validation
  validate(id:any,ownerPublicAddress:string,govTitle:string){

    console.log(id)
    console.log(ownerPublicAddress)
    console.log(govTitle)


    //set product to verified
    this.productService.validateProperty(id).subscribe(data=>console.log(data));

    //blockchain validation
    this.web3Service.RegisterProperty(ownerPublicAddress,govTitle)

    

  }






  //set verified attribute to false -> delete property
  Reject(id:number){
    this.productService.rejectProperty(id).subscribe(data=>console.log(data));
  }



}
