import { Component } from '@angular/core';
import { DataService } from './data.service';
import { trigger,state,style,transition,animate,keyframes} from '@angular/animations';

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

    <img src="{{angularLogo}}">
    <img [src]="angularLogo">
    <img bind-src="angularLogo">
    <button [disabled]="buttonStatus">My button1</button>

    <button (click)="myEvent($event)">My button2 </button>
    <button (mouseenter)="myEvent($event)">My button3 </button>
    
    <h1>Hello!</h1>
    <h1 [class]="titleClass">Hello!</h1>
    <h1 [class.red-title]="titleClass2">Hello!!</h1>
    <h1 [ngClass]="titleClasses">Hello!!!</h1>
    
    <h1 [style.color]="titleStyle">Hello!!!!</h1>
    <h1 [style.color]="titleStyles ? 'green':'pink'">Hello!!!!</h1>
    <h1 [ngStyle]="titleStyless">Hello!!!!</h1>

    <p>{{someProperty}}</p>

    <p [@myAwesomeAnimation]='state' (click)="animateMe()">I will animate</p>
    `,
  //styleUrls: ['./app.component.css']
  styles:[`
    h1{
        text-decoration:underline;
    }
    .red-title {
      color:red;
    }
    .large-title{
      font-size:4em;
    } 
    p{
      width:200px;
      background:lightgray;
      margin:100px auto;
      text-align:center;
      padding:20px;
      font-size:1.5em;
    }
    `],
  animations:[
    trigger('myAwesomeAnimation',[
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.2)',
      })),
      
      transition('small <=>large', animate('300ms ease-in', keyframes([
        style({opacity: 0, transform: 'translateY(-75%)', offset:0}),
        style({opacity: 2, transform: 'translateY(35px)', offset:.5}),
        style({opacity: 1, transform: 'translateY(0', offset:1}),
      ]))),
      //style({transform: 'translateY(40px)'
      //}))),
    ]),
   ]
})
export class AppComponent {
  myObject = {
    gender: 'male',
    age:33,
    location: 'USA'
  }
  //myArr = ['123','321','555']
  myArr=false;

  angularLogo = 'https://firebase.google.com/images/homepage/build_1x.png'
  buttonStatus = false;
  myEvent(event){
    console.log(event);
  }

  titleClass = 'red-title';
  titleClass2 = false;
  titleClasses = {
    'red-title':true,
    'large-title':true
  }

  titleStyle = 'red';
  titleStyles = true;
  titleStyless = {
    'color':'pink',
    'font-size':'4em'
  }

  constructor(private dataService:DataService){

  }
  someProperty:string = '';


  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.dataService.cars);
    this.someProperty = this.dataService.myData();
  }

  state:string='small'

  animateMe(){
    this.state = (this.state === 'small'?'large':'small');
  }
}
