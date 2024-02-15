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
  //any name can be given instead of router 
  //we cannot reach PM directly, we have to approach him PA first, so PA here so router and PM is Router
  //We need to inject dependency in constructor at the time of component initialization only. Dependencies like services, inbuilt classes need to be evoked.
  //We will inject router class dependency in constructor
  //Put private/public access specifier in constructor
  //private-if u want to use it only in ts file
  //public-if u want to use reference property in html also
  //by default, all methods are public
  //router-reference property
  //Router-actual class
  //Router is used to redirect from one screen to other
  //class name is always title case
  //when button click will be done, then test() will be automatically called
  test()
  {
    //then compiler will come here
    //navigatebyurl is a method in Router class
    //We have to reach this method using reference property in test()
    this.router.navigateByUrl('testt') ;
    //test because I want to redirect it to test component. Go to app-routing-module.ts
    //{path: "testt", component: TestComponent}.
    //whatever is there in path:"testt" needs to be pasted
  //navigateByUrl is a method so it will accept parameters
  }

  directiveCompo()
  {
    this.router.navigateByUrl('directivee');
  }


  adminMod()
  {
    this.router.navigateByUrl('/admin/adminLanding')
  }
}
