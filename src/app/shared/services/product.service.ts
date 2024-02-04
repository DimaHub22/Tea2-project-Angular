import { Injectable } from '@angular/core';
import {ProductType} from "../../../type/product.type";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }


  getProducts(string:string = ''):Observable<ProductType[]>{
    return this.http.get<ProductType[]>(string ? environment.apiURL + 'tea': environment.apiURL + 'tea',{params:{search:string}})
  }

  getProduct(id:number):Observable<ProductType>{
    return this.http.get<ProductType>(environment.apiURL + `tea?id=${id}`)
  }

}
