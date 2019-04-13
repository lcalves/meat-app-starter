import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurants/restaurant/restaurant.model'
import { RestaurantsService } from './restaurants.service'


@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})

export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[]

  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit() {

      this.restaurantsService.restaurants().subscribe(rest => this.restaurants = rest)

  }

}
