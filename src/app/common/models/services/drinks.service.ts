import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Drink } from '../drinks';

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root',
})
export class DrinksService {
  model = 'drinks';

  constructor(private http: HttpClient) {}

  getDrinks() {
    return this.http.get<Drink[]>(this.getUrl());
  }

  private getUrl() {
    return `${BASE_URL}${this.model}`;
  }
}
