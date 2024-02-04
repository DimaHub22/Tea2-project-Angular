import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {AccordionComponent} from "./accordion/accordion.component";
import {ProductCartComponent} from "./product-cart/product-cart.component";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    AccordionComponent,
    ProductCartComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports:[
    AccordionComponent,
    ProductCartComponent,
  ]
})
export class SharedModule { }
