import {Component, OnInit} from '@angular/core';
import {ProductType} from "../../../../type/product.type";
import {ProductService} from "../../../shared/services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CartOrderService} from "../../../shared/services/cart-order.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: ProductType

  constructor(private productService: ProductService, private router: Router, private activatedRouter: ActivatedRoute, private cartOrder: CartOrderService
  ) {
    this.products = {
      id: 0,
      image: '',
      title: '',
      price: 0,
      description: ''

    }
  }

  getTeaTitle() {
    this.cartOrder.teaTitle = this.products.title
  }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(param => {
      if (param['id']) {

        this.productService.getProduct(+param['id']).subscribe({
          next: (data) => {
            this.products = data
          },
          error: (error) => {
            console.log(error)
            this.router.navigate(['/'])
          }
        })
      }
    })

  }

}
