import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";




@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  isClose = false
  private observable: Observable<boolean>
  private subscrition: Subscription | null = null


  constructor() {
    let router = localStorage.getItem('router')

    this.observable = new Observable((observer) => {
      const setTimeOut = setTimeout(() => {
        observer.next( router && router === 'true' ? this.isClose = false : this.isClose = true)
      }, 10000);
      return {
        unsubscribe() {
          clearTimeout(setTimeOut)
        }
      }

    })
  }

  close() {
    this.isClose = false
  }

  ngOnInit(): void {
    this.subscrition = this.observable.subscribe()
  }

  ngOnDestroy() {
    this.subscrition?.unsubscribe()
    this.isClose = false
  }

}
