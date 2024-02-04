import {Component, Input, OnInit} from '@angular/core';
import {ProductType} from "../../../type/product.type";

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent implements OnInit {
  @Input() tea: ProductType


  constructor() {
    this.tea = {
      id: 0,
      image: '',
      title: '',
      price: 0,
      description: ''
    }
  }

  ngOnInit(): void {

  }

}
