import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-nouvel-annonces',
  templateUrl: './nouvel-annonces.component.html',
  styleUrls: ['./nouvel-annonces.component.scss']
})
export class NouvelAnnoncesComponent implements OnInit {

  newAnnonces!:Product[]
  priceeth="9999"
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getNewAnnonces()
  }


  public getNewAnnonces(){
    this.productService.getExploreProducts().subscribe(
      data=>{
        this.newAnnonces=data.slice(0,4);
      });
  }



}
