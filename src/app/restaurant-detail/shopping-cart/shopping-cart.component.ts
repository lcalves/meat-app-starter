import { ShoppingCartService } from './shopping-cart-service';
import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  preserveWhitespaces : true,
  animations: [
    trigger('row', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', animate('500ms 0s ease-in', keyframes([
          style({ opacity: 0, transform: 'translateX(-30px', offset: 0 }),
          style({ opacity: 0.8, transform: 'translateX(10px', offset: 0.8 }),
          style({ opacity: 1, transform: 'translateX(0px', offset: 1 }),
        ]))),
        transition('ready => void', animate('900ms 0s ease-out', keyframes([
          style({ opacity: 1, transform: 'translateX(-10px', offset: 0 }),
          style({ opacity: 0.8, transform: 'translateX(-25px', offset: 0.2 }),
          style({ opacity: 0, transform: 'translateX(30px', offset: 1 }),
        ])))
    
    ])
  ]
})
export class ShoppingCartComponent implements OnInit {

  rowState: string = 'ready'

  constructor(private shoppingCartSercive: ShoppingCartService) { }

  ngOnInit() {
  }

  items(): any[]{
    return this.shoppingCartSercive.items;
  }

  total(): number{
    return this.shoppingCartSercive.total();
  }

  clear(){
    this.shoppingCartSercive.clear()
  }

  removeItem(item: any){
    this.shoppingCartSercive.removeItem(item)
  }

  addItem(item: any){
    this.shoppingCartSercive.addItem(item)
  }
}
