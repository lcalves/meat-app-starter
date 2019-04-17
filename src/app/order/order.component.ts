import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/radio/radio-option.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {


  paymentOptions: RadioOption[] = [
            {label: 'Dinheiro', value: 'Mon'},
            {label: 'Cartão de Débito', value: 'DEB'},
            {label: 'Cartão Regeição', value: 'REF'}
          
          ]


  constructor() { }

  ngOnInit() {
  }

}
