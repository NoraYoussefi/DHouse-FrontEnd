import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  title:any="One Tribe Black Edition";
  username:any="oswaldo";
  priceeth:any="20";
  priceusd:any="132454";
  type:any="commercial";
  property_id:any="AJJF2H2L34J5K24J234L2355J"

  transaction:any={
    "title":this.title,
    "seller":this.username,
    "eth":this.priceeth,
    "usd":this.priceusd,
    "type":this.type,
    "property":this.property_id
  }



  constructor() { }

  ngOnInit(): void {
  }



  buyProperty(){
    console.log("Buying a property")
    console.log(this.transaction)
  }
}
