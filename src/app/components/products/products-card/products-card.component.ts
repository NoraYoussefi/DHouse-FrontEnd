import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.scss']
})
export class ProductsCardComponent implements OnInit {

  priceusd:any=132433;
  priceeth:any=43;
  username:any="ZeniconStudio";
  title:any="One Tribe Black Edition";

  constructor() { }

  ngOnInit(): void {
  }

}
