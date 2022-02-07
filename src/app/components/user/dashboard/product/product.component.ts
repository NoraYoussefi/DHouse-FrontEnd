import { Component, OnInit,Input } from '@angular/core';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }

  @Input() id!:any
  @Input() title?:string;
  @Input() govTitle?:string
  @Input() image?:string | null;
  @Input() userId?:string
  @Input() physcial_address?:string;
  @Input() category:any;
  @Input() priceusd?:number;



  //delete product
  DeleteProduct(id:any){
    this.productService.setProductToSold(id)
    .subscribe(
      data => {
        console.log(data)
      },
      err => {
        console.log(err)
      }
    );;
  }

}

