import { Component, OnInit } from '@angular/core';
import { DrinksService } from '../common/models/services/drinks.service';
import { Drink } from '../common/models/drinks';

const emptyDrink: Drink = {
  id: null,
  title: '',
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
  drinks = [];
  selectedDrink = emptyDrink;
  originalTitle = '';

  constructor(private drinksService: DrinksService) {}

  ngOnInit(): void {
    this.fetchDrinks();
  }

  selectDrink(drink) {
    this.selectedDrink = { ...drink };
    this.originalTitle = drink.title;
  }

  fetchDrinks() {
    this.drinksService.all().subscribe((result: any) => (this.drinks = result));
  }

  saveDrink(drink) {
    if (drink.id) {
      this.updateDrink(drink);
    } else {
      this.createDrink(drink);
    }
  }

  createDrink(drink) {
    this.drinksService.create(drink).subscribe((result) => this.fetchDrinks());
  }

  updateDrink(drink) {
    this.drinksService.update(drink).subscribe((result) => this.fetchDrinks());
  }

  deleteDrink(drinkId) {
    console.log('delete drink', drinkId);
  }

  reset() {
    this.selectDrink({ ...emptyDrink });
  }
}
