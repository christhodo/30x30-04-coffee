import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'coffee-app';
  links = [
    { path: '/login', icon: 'vpn_key', title: 'Login' },
    { path: '/drinks', icon: 'view_list', title: 'Drinks' },
  ];
}
