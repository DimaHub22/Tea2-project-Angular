import {Component, OnInit} from '@angular/core';
import {CartOrderService} from "../../shared/services/cart-order.service";
import { NonNullableFormBuilder, Validators} from "@angular/forms";
import {OrderService} from "../../shared/services/order.service";
import {Router} from "@angular/router";
import {catchError, Subscription} from "rxjs";


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  checkoutForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern("^[a-zA-ZА-Яа-яЁё]+$")]],
    last_name: ['', [Validators.required, Validators.pattern("^[a-zA-ZА-Яа-яЁё]+$")]],
    phone: ['', [Validators.required, Validators.pattern('^\\+?[0-9]{11}')]],
    country: ['', [Validators.required]],
    zip: ['', [Validators.required, Validators.pattern("^[0-9]{6}$")]],
    product: [this.cartOrder.teaTitle, [Validators.required]],
    address: ['', [Validators.required, Validators.pattern('^[а-яА-ЯёЁa-zA-Z0-9\\-\\#\\s]+$')]],
    comment: [''],

  })

  success: boolean = true
  error: boolean = false

  subscriptionOrder: Subscription | null = null

  constructor(private cartOrder: CartOrderService,
              private fb: NonNullableFormBuilder,
              private orderService: OrderService,
              private router: Router) {
  }

  ngOnInit(): void {
    if (this.checkoutForm.get('product')?.errors?.['required']) {
      this.router.navigate(['/catalog'])
    }
  }

  createOrder() {

    this.subscriptionOrder =  this.orderService.createOrder(this.checkoutForm.getRawValue())
      .pipe(
        catchError(error => {
          throw new Error('Error')
        })
    )
      .subscribe({
      next: (response) => {
        this.success = false
        this.checkoutForm.reset()
        setTimeout(() => {
          this.router.navigate(['/catalog'])
        }, 3000)
      },
      error: (error) => {
        this.error = true
        console.log(error)
      }

    })
  }

}
