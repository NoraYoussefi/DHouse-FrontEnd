import { Component, OnInit } from '@angular/core';

enum Method {
  onetoone = 0,
  onetomany
}


enum Category{
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

  propertyform:any={
    images:null,
    legaldocs:null,
    method:Method.onetoone,
    publicKey:null,
    category:null,
    title:null,
    govTitle:null,
    desc:null,
    physcial_address:null,
    priceusd:null
  }


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    //removing public key if onetomany is chosen
    if(this.propertyform.method==Method.onetomany)this.propertyform.publicKey=null;

    console.log(this.propertyform)
  }





  //category select
  changeCat(e:any){
    this.propertyform.category=this.categories.indexOf(e.target.value);
  }

  //set methods of transaction
  setOne2One(){
    this.one2one=true
    this.propertyform.method=Method.onetoone;
  }

  setOne2Many(){
    this.one2one=false;
    this.propertyform.method=Method.onetomany;
  }

}
