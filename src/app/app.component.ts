import { Component } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecomerceSite';
  getVaue: any = {
    'image': 'https://images-na.ssl-images-amazon.com/images/I/61yaJHKmghL._SL1000_.jpg',
    'price': 2000,
    'size': 'L'
  };

  dataTable = [
    {
      'id': 0,
    'image': 'https://images-na.ssl-images-amazon.com/images/I/61yaJHKmghL._SL1000_.jpg',
    'price': 2000,
    'size': 'L'
     },
     {
      'id': 1,
      'image': 'https://images-na.ssl-images-amazon.com/images/I/81ryWqBfRRL._SL1500_.jpg',
      'price': 2100,
      'size': 'XL'
       },
       {
      'id': 2,
        'image': 'https://images-na.ssl-images-amazon.com/images/I/511U9YLEaUL._SL1000_.jpg',
        'price': 2020,
        'size': 'XXL'
         },
  ];

  selected = new FormControl(0);

  doSomething(event) {
      console.log('event', event);
      this.getVaue = this.dataTable[event.value];
  }

}
