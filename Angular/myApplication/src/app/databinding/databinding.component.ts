import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
 //let a = 90;
 title = 'myApplication';
 //propertyName : data type = value;
 a = 20;
 b: number = 90;
 c!: number;
 city: string = "Pune";
 //db >>defins communication between a component and the DOM. 
 //It is a technique to link  data to dom
 //1. one way db 2. two way db
 //1. one way db>> One way databinding is a simple one way communication where  template is changed when we make changes incontrol.
 //1.string interpolation>>{{}} >>syntax {{propertyName}}
 //2.property binding >>[]>> [attribute]="proprtyName"
 //3. event binding>>()>>on event will bind data to the property
 //Two way data bind >> [()]>> [(ngModel)]="propertyName">>In two-way databinding, automatic synchronization of data happens between the Model and the View.
 myName = "Poonam";
 isDisable = false;
 fruit!:string;
 favFruit = "Mango";
 constructor() { }

 submit() {
   this.fruit = "Mango";
 }
 inputBoxValue(data:any){
  console.log(data.target.value);
  this.myName = data.target.value
 }
}


