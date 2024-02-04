import {Component} from '@angular/core';


@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],

})
export class AccordionComponent {

  panel: string = 'p1'

  constructor() {
  }


  show(p: string) {
    this.panel === p ? this.panel = '' : this.panel = p

  }

}
