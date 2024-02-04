import {Component, OnInit} from '@angular/core';
import { NonNullableFormBuilder, Validators} from "@angular/forms";
import { Router} from "@angular/router";
import {Subject} from "rxjs";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  private searchSubject: Subject<string> = new Subject()
  formSearch = this.fb.group({
    title: ['', [Validators.required]]
  })


  constructor(private fb: NonNullableFormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {

  }

  test() {
    let form = this.formSearch.getRawValue()

    this.searchSubject.subscribe(value => {
      this.router.navigate(['/catalog'], {queryParams:{search:value}})
    })

    this.searchSubject.next(form.title)

  }
  clear(){
    this.formSearch.reset()
    this.searchSubject.next("")
    this.router.navigate(['/catalog'])
  }

}
