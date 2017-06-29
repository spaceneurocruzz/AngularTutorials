import { Injectable } from '@angular/core';

@Injectable()

export class DataService {

  constructor() { }

  cars = [
    'Ford','Chevolet','Buick'
  ]

  myData(){
    return 'This is my data!'
  }

}
