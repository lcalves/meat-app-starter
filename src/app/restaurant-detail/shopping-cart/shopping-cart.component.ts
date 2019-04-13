import { ShoppingCartService } from './shopping-cart-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

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
