import { Component, OnInit,Input } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.scss']
})
export class ProductsCardComponent implements OnInit {

  @Input() userId!:any
  @Input() id!:any
  @Input() priceusd:any
  @Input() priceeth:any
  @Input() username:any
  @Input() title:any
  @Input() image!:string | null

  constructor() { }

  ngOnInit(): void {
  }



}
