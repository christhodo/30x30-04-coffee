import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class DrinksService {
  model = 'drinks';

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get(this.getUrl());
  }

  find(id) {
    return this.http.get(this.getUrlWithID(id));
  }

  create(drink) {
    return this.http.post(this.getUrl(), drink);
  }

  update(drink) {
    return this.http.put(this.getUrlWithID(drink.id), drink);
  }

  delete(id) {
    return this.http.delete(this.getUrlWithID(id));
  }

  private getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  private getUrlWithID(id) {
    return `${this.getUrl()}/${id}`;
  }
}
