import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {OrderType} from "../../../type/order.type";
import {OrderResponseType} from "../../../type/order.response.type";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {
  }

  createOrder(data: OrderType): Observable<OrderResponseType> {
    return this.http.post<OrderResponseType>(environment.apiURL + `order-tea`, data)
  }
}
