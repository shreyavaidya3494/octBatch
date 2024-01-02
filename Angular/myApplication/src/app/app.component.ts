import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApplication';
  //declare property. Below syntax
  //propertyName: data type=value;

  a=20;
  b:number=90;
  c!:number ;//means c is just declared but value will be assigned later
  city: string="Hyderabad";
  //{{propertyName}}
  //[attribute]="propertyName"
  myName="Shreya";
  isDisable=false;
  fruit!:string;
  FavFruit="Apple";
  
  constructor(){}

  press()
  {
   this.fruit="Mango"  //this keyword is used when we reuse previously defined variable to assign value to it in function
  }


}
