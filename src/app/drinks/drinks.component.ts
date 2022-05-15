import { Component, OnInit } from '@angular/core';
import { DrinksService } from '../common/models/services/drinks.service';
import { Drink } from '../common/models/drinks';

const emptyDrink: Drink = {
  id: null,
  size: '',
  shots: 0,
  milk: '',
  syrup: '',
};

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss'],
})
export class DrinksComponent implements OnInit {
  drinks = [
    {
      id: 'Americano',
      size: 'Venti',
      shots: '4',
      milk: 'none',
      syrup: 'none',
    },
    {
      id: 'Latte',
      size: 'Venti',
      shots: '2',
      milk: 'none',
      syrup: 'none',
    },
  ];

  selectedDrink = null;

  constructor(private drinksService: DrinksService) {}

  ngOnInit(): void {}

  selectDrink(drink) {
    this.selectedDrink = drink;
  }

  deleteDrink(drinkId) {
    console.log('delete drink', drinkId);
  }

  reset() {
    this.selectedDrink({ ...emptyDrink });
  }
}
