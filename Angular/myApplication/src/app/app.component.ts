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
  c!:number //means c is just declared but value will be assigned later

}
