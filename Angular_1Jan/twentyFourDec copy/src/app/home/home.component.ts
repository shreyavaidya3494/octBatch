import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
//constructor is a method which gets invoked internally at the time of component initialization
  constructor(private router: Router){}
  //We need to inject dependency in constructor at the time of component initialization only. Dependencies like services, inbuilt classes need to be evoked.
  //We will inject router class dependency in constructor
  //Put private/public access specifier in constructor
  //private-if u want to use it only in ts file
  //public-if u want to use reference property in html also
  //by default, all methods are public
  //router-reference property
  //Router-actual class
  //Router is used to redirect from one screen to other
  test(){}

}
