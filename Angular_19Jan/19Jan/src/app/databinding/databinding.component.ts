import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
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
  favFruit="Watermelon";
  favVeg="Potato";

  constructor() {}

  submit()
  {
   this.fruit="Mango";
  }

}
