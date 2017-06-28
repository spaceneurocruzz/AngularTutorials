import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Hey guys!</h1>
  <p> how are u?</p>
  <p>{{myObject.location}}</p>
    <ul>
      <li *ngFor="let arr of myArr">{{arr}}</li>
      <li *ngIf="myArr; else otherTmpl">yeah</li>
    </ul>
    <div *ngIf="myArr; then Tmpl1 else Tmpl2">yeah</div>
    <ng-template #otherTmpl>No</ng-template>
    <ng-template #Tmpl1>truth</ng-template>
    <ng-template #Tmpl2>False</ng-template>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myObject = {
    gender: 'male',
    age:33,
    location: 'USA'
  }
  //myArr = ['123','321','555']
  nyArr=false;
}
