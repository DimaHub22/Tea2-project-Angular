import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import {CatalogComponent} from "./catalog.component";
import {SharedModule} from "../../../shared/shared.module";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    RouterModule,
    CatalogRoutingModule,
    SharedModule,
  ],
  exports: [
    CatalogRoutingModule
  ]
})
export class CatalogModule { }
