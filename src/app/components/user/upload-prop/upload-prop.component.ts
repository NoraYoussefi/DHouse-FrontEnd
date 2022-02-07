import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { FileuploadService } from 'src/app/service/FileUpload/fileupload.service';
import { ProductService } from 'src/app/service/product/product.service';
import { Web3Service } from 'src/app/service/web3/web3.service';


enum Category {
  House=0,
  Appartment,
  Land,
  Commercial,
  Complex_Building
}



@Component({
  selector: 'app-upload-prop',
  templateUrl: './upload-prop.component.html',
  styleUrls: ['./upload-prop.component.scss']
})


export class UploadPropComponent implements OnInit {

  categories:any=['House','Appartment','Land','Commercial','Complex Building']

  one2one:boolean=true;

  product:Product=new Product()

  UserPublicAddress:any

  // Variable to store shortLink from api response
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file!: File; // Variable to store file


  //------------------
  selectedFile!: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message!: string;
  imageName: any;


  images:any[]=[];
  pdf:any[]=[]


  constructor(
    private web3Service:Web3Service,
    private productService:ProductService,
    private fileUploadService:FileuploadService,
    private httpClient:HttpClient
  ) { }

  ngOnInit(): void {
    //get user public address
    this.UserPublicAddress=window.sessionStorage.getItem("publickey");
  }




  //upload pdf
  UploadPDF(event: any){
    let pdf = event.target.files; 

    let folder = "pdf/";

    for (let i = 0; i < pdf.length; i++) {

      let reader = new FileReader();
      reader.readAsDataURL(pdf[i]);

      reader.onloadend = () => {
        
        this.images.push(reader.result);
        this.fileUploadService.subirImagen(folder+"_"+ Date.now(), reader.result).then(url => { if(url){
                  window.sessionStorage.setItem("pdfurl", url);
                  console.log(url)  
      
      }}    
      );

      } 

    }

  }



  //upload image
  UploadImage(event: any) {
      let image = event.target.files; 

      let folder = "images/";

      for (let i = 0; i < image.length; i++) {

        let reader = new FileReader();
        reader.readAsDataURL(image[i]);

        reader.onloadend = () => {
          
          this.images.push(reader.result);
          this.fileUploadService.subirImagen(folder+"_"+ Date.now(), reader.result).then(url => { if(url){
                    window.sessionStorage.setItem("imgurl", url);
                    console.log(url)  
        
        }}    
        );

        } 

      } 
  }



  //---------------------------------------------

  async onSubmit(){
    
    
    //set public key to current user address
    this.product.publicKey=this.UserPublicAddress
    console.log(this.product)

    this.product.images= window.sessionStorage.getItem("imgurl")
   
    this.product.legaldocs= window.sessionStorage.getItem("pdfurl")

    this.addProduct(this.product) //add prodcut to db


    //auto verification
    const VerifyProp=this.web3Service.verifyPropExistance(this.product.govTitle)
    const VerifyOwner=this.web3Service.verifyOwner(this.product.govTitle)


    if(await VerifyProp){

      console.log("------property exists------")

      if(await VerifyOwner){
        console.log("------you are the owner------")

        this.product.verified=true //verify property

        this.addProduct(this.product) //add prodcut to db

      }
      else{
        console.log("------not the owner------")
        alert("Property Exists & You're not the owner ya chefar")
      }

    }
    else{
      console.log("------property doesn't exist _ must be verified------")

      this.product.verified=false //set verified to false - must be verified by the admin
      this.addProduct(this.product) //add prodcut to db

    }


  }



  addProduct(product:Product){
    this.productService.addProduct(product)
    .subscribe(
      data => {
        console.log(data)
      },
      err => {
        console.log(err)
      }
    );
  }




  //category select
  changeCat(e:any){
    this.product.category=this.categories.indexOf(e.target.value);
  }






}

