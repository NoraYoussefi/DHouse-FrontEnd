import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from 'src/app/models/Transaction';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  constructor() { }

  @Input() transactions!:Transaction[]
  @Input() userId:any

  ngOnInit(): void {
  }



}
