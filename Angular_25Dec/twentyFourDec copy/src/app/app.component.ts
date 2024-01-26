import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'twentyFiveDec';
  a=5;
  city:string="Hyderabad";
  country:string="Pakistan";
  myName="Sania";
  mySurname="Malik";
  mySon="Izhan"
  isDisable=true;
  isDisablee=false;
  fruit!:string;
  // If I want to use this fruit property in ts file below constructor, in function, then it is done by using "this" keyword

  constructor() {}

  submit()
  {
   this.fruit="Mango";
  }
}
