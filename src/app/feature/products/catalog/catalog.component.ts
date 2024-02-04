import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductType} from "../../../../type/product.type";
import {ProductService} from "../../../shared/services/product.service";
import {ActivatedRoute, Router} from "@angular/router";



@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit, OnDestroy {
  products: ProductType[] = []
  loading:boolean = false
  title: string = ''


  constructor(private productService: ProductService,
              private router: Router,

              private activeRouter: ActivatedRoute,) {

  }


  ngOnInit(): void {

    let rou = this.router.config.find(item => item.path)

    if (rou) {
      localStorage.setItem('router', 'true')
    }

    this.getResponse()

  }

  getResponse() {
    this.loading = true

    this.activeRouter.queryParams.subscribe(params => {
      this.products = []

      let search = params['search']
      this.productService.getProducts(search).subscribe({

        next: (data) => {

          if (data.length !== 0 && search !== '') {
            if (search) {
              this.title = `«Результаты поиска по запросу ${search}»`
            } else {
              this.title = 'Наши чайные коллекции'
            }

            for (let key in data) {
              this.products.push(data[key])
            }
          } else if (search === '') {
            this.title = 'Наши чайные коллекции'
          } else {
            this.title = 'Ничего не найдено'
          }

          this.loading = false

        },

        error: (error) => {
          console.log(error)
          this.router.navigate(['/'])
        }
      })
    })
  }

  ngOnDestroy() {

  }

}
