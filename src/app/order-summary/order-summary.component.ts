import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-order-summary',
  templateUrl: './order-summary.component.html'
})
export class OrderSummaryComponent implements OnInit {

  rates: number[] = [1,2,3,4,5]

  rate: number = 0

  constructor() { }

  ngOnInit() {
  }

}
