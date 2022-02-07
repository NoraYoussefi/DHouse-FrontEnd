import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from 'src/app/models/Product';
import { Observable } from 'rxjs';
import { TokenService } from '../user/token.service';


//api-gateway
const ANNONCES_API = 'http://localhost:9191/annonces';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};



@Injectable({
  providedIn: 'root'
})
export class ProductService {


  OneEth:any;
  constructor(private http: HttpClient, private tokenService:TokenService) {
    this.UsdToEth()
  }


  public setProductToSold(id:any){
    return this.http.post(ANNONCES_API+'/buy/'+id,httpOptions);
  }

  //--------------------PUBLIC USERS
  public getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(ANNONCES_API+'/consulter');
  }


  public getProductById(id:any):Observable<Product>{
    return this.http.get<Product>(ANNONCES_API+'/product/'+id);
  }



  //-------------------ADMIN ONLY
  public validateProperty(id:any):Observable<Object>{
    return this.http.post(ANNONCES_API+'/validate/'+id,httpOptions);
  }

  public rejectProperty(id:any):Observable<Object>{
    return this.http.delete(ANNONCES_API+'/reject/'+id);
  }


  addProduct(product:Product): Observable<Object> {
    return this.http.post
      (
        ANNONCES_API + '/ajouter',
        product,
        httpOptions
      );
  }




  public getAllVerifiedProducts():Observable<Product[]>{
    return this.http.get<Product[]>(ANNONCES_API+'/verified');
  }

  //explore page
  public getExploreProducts():Observable<Product[]>{
    return this.http.get<Product[]>(ANNONCES_API+'/explore');
  }


  //-----------ADMIN
  public getAllNonVerifiedProducts():Observable<Product[]>{
    return this.http.get<Product[]>(ANNONCES_API+'/nonverified');
  }




  //-------PROFILE
  public getLiveProductsForUserProfile(id:any):Observable<Product[]>{
    return this.http.get<Product[]>(ANNONCES_API+'/explore/'+id);
  }












  //-----------------------USER'S DASHBOARD
  public getSoldProductsByUserId():Observable<Product[]>{

    return this.http.get<Product[]>(ANNONCES_API+'/usersold');
  }


  public getLiveProductsByUserId():Observable<Product[]>{
    return this.http.get<Product[]>(ANNONCES_API+'/explore/'+this.tokenService.getUser().id);
  }


  public getVerifiedProductsByUserId():Observable<Product[]>{
    return this.http.get<Product[]>(ANNONCES_API+'/userverified');
  }

  public getAllNonVerifiedProductsbyUserId():Observable<Product[]>{
    return this.http.get<Product[]>(ANNONCES_API+'/usernonverified');
  }



  //---------------
  public Usd2Eth():Observable<Object>{
    return this.http.get<Object>('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD');
  }




  public UsdToEth(){
    this.Usd2Eth().subscribe(
      data=>{
        this.OneEth=data
        return this.OneEth.USD
      }
    );
  }

}
