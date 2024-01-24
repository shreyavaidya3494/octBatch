to install latest version of angular : npm i -g @angular/cli
to install angular cli version wise: npm i -g @angular/cli@16
to check installed or not : ng v
 
create project : ng new projectName
Here, we write ng new myApplication

If failure in oroject myApplication creation: delete node_modules folder and regenerate it by : npm i or npm install or 
if node_module not present in structure then create new project

to run project/application, always open terminal on project folder
: ng serve or ng s or  ng serve --open or ng s -o
-o means application will get opened on default browser


to resolve powershell unauthorized issue:
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser  ...after doing this..Get-ExecutionPolicy as mentioned below:-

PS E:\oct2023\octBatch\Angular> cd ..
PS E:\oct2023\octBatch> Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
PS E:\oct2023\octBatch> Get-ExecutionPolicy
RemoteSigned

What is the use of README file: In this file, we do not write programs or code. We can write notes/ messages for team members or ourselves.


Now, coming to all folder under Angular--myApplication
1- .angular,  2- .vscode folders are catches , so not much impact

3-node_modules- This folder contains all npm packages. This folder is generated locally, so we do not push it on git
More the project grows, more dependencies increase, so high size will be there, so git push pull takes more time.

6- .gitignore- Here we write files that needs to be ignored for git. If we do any changes in node_modules file, then those changes will not get reflected in source control tree because git ignores that. so changes cannot be pushed in git. Put the files in gitignore, which will not get pushed or pulled on git

After taking pull from Poonam mam's branch, if I want to run the code, I will 1st have to install npm packages and then run the code
npm i , then ng s -o
then only you can run code locally on vs code

if node_module is corrupt or not available, then u can never run a project successfully

5- angular.json- This file is backbone of angular application. Project name, configuration , what to do to run, serve- opens server and processes, test etc, all data is there in this file


7- package.json: This file contains all dependencies. Which 3rd party libraries are used in project- Bootstrap, angular material used or not are this can be seen in dependencies header inside package. json file.


tsconfig.app.json, tsconfig.json,  tsconfig.spec.json are configuration files

package-lock.json- Meta data of dependencies in package.json is present here. Contains in detail explanation of dependencies.


src- src folder is most important for developer-

i) app- Its a root folder. This folder has following-
a- app-routing.module.ts- Its a root routing module
b-app.component.css
c-app.component.html
d-app.component.spec.ts
e-app.component.ts
f-app.module.ts- Its a root module
Angular is component based architecture.
1 component is made up of 4 files-app.component.css,  app.component.html,   app.component.spec.ts  , app.component.ts


main.ts is entry point for angular JS application then goes to import app module- 6 files then goes to index.html
In index.html, app-root is used as tag which is a selector is app.component.ts, then it loads app.component.html which we can see in UI


assets folder contains public data like wallpaper, icon etc. This we want to show to public, so we keep such data in asset


style.css - Project background, screen background, color, header, footer. This is written in style.css

Angular is single page application because at the end only index.html is there on UI. Body gets over written as Components gets over written. Screen changes but application does not bet refreshed.

24/12

In index.html file, you'll find app-root tag in body of html. app-root is selector in app.component.ts. This is called root component. app.module.ts is root module.

In angular components come together to form a module. Same as flat come together to form a floor

Component-components bunch together to form a module and module-module bunch together to form a project

What is component?
Component is a single folder

4 component files are connected and are known by selector app-root and they are already linked. WE don't have to link them manually

Open file app.component.ts
@Component({
  selector: 'app-root', --this hows selector
  templateUrl: './app.component.html',------------- this link says that it has html code
  styleUrls: ['./app.component.css']------------------this link says that it has css code
})
HTML CSS typescript all are linked here. So we don't have to link anything



import { Component } from '@angular/core'; //import section

@Component({   //component directive or meta data--component initialize, linkeage, behavior, DOM behavior, look and feel by CSS
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {    //class name is in title case
  title = 'myApplication';   // we should write functionality or code here in this class
}




Command to generate component:
ng g c home
g- generate
c- component
home- component name

PS E:\oct2023\octBatch\Angular\myApplication> ng g c home
Node.js version v19.8.1 detected.
Odd numbered Node.js versions will not enter LTS status and should not be used for production. For more information, please see https://nodejs.org/en/about/releases/.
CREATE src/app/home/home.component.html (19 bytes)
CREATE src/app/home/home.component.spec.ts (545 bytes)
CREATE src/app/home/home.component.ts (194 bytes)
CREATE src/app/home/home.component.css (0 bytes)
UPDATE src/app/app.module.ts (467 bytes)








Open app.module.ts file> This is a global module and it gets updated here.
**********app module is root module.
Can we change root module-Yes. We have to change app module in all other files

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';   //accordingly got updated after creating home component

@NgModule({   //eagerly loaded module with 4 keys- declarations, imports, providers, bootstrap
  declarations: [           //gets updated when u create a component/directive/pipe
    AppComponent,       //when project was created, this AppComponent got created by default
    HomeComponent       //We made this component
  ],
  imports: [          //gets updated when u create or import modules
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],  //used to get updated in case of services but no longer used after angular 5
  bootstrap: [AppComponent]  //Root component means app component (all present in app folder). Bootstarp means we boot, app starts from here. Default root components shows URL. We can change this

  We can change root component also and root module also

})



open file app.component.html. Delete the default contents and write code there:
<div> Hello! Welcome to Angular learning</div>
<!-- This will get displayed on MyApplication -->



open home in src-app=app.component.html
some default p tag will be visible like this
<p>home works!</p>

In MyApplication, only app.component.html's code "Hello! Welcome to Angular learning" is visible but app.component.html's code "home works" is not visible. We cannot display the contents of flat in which we are not there.

Solutions to make it visible:
selector or routing

1st way- selector- We do this when we have to show live components
Open app.component.html file

so both components will be live i.e app.component.html and home.component.html

<div> Hello! Welcome to Angular learning</div>
<!-- This will get displayed on MyApplication -->
<app-home></app-home> //add this

Output on MyApplication:
Hello! Welcome to Angular learning
home works!


How many components can be live together?- Many like heade, footer, body etc, depends upon requirements


What is property?
Global variable without let/const/var.
Scope of property is limited to components


Open app.component.ts
This is visible-

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApplication';  //let us assume that this data comes from backend. We will do string interpulation from here.
}

*****************string interpolation********************************************

Now open app.component.html. This is visible
<div> Hello! Welcome to Angular learning</div>
<!-- This will get displayed on MyApplication -->
<app-home></app-home>

Make it as
<div> Hello! Welcome to Angular learning</div>
<!-- This will get displayed on MyApplication -->
<p>{{title}}</p>
<app-home></app-home>

Output on myApplication is
Hello! Welcome to Angular learning
myApplication
home works!


Open app.component.ts-
We will learn how to declare property

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

This is a typescript concept. Varibale in javascript is same as property i  typescript

now I write a in app.component.html as follows:-
<div> Hello! Welcome to Angular learning</div> 
<!-- static data -->
<!-- This will get displayed on MyApplication -->
<p>{{title}}</p>
<p>{{a}}</p>
<!-- data came from property -->
<app-home></app-home>


Output on MyApplication:
Hello! Welcome to Angular learning
myApplication

20

home works!



--------------------------------------------------------------25 Dec 2023----------------------------------------------------------


**********************One way data binding or one way data communication *****************************************************
Data is going from typescript to html, so one way

*************************Data binding technique no 1------string interpolation***************************************


Open app.component.ts

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
  city: string="Hyderabad"

}


Open app.component.html

<div> Hello! Welcome to Angular learning</div> 
<!-- static data -->
<!-- This will get displayed on MyApplication -->
<p>{{title}}</p>
<p>{{a}}</p>
<div>{{city}}</div>
<!-- data came from property -->
<app-home></app-home>


Output on MyApplication:
Hello! Welcome to Angular learning
myApplication

20

Hyderabad
home works!

{{}}- This is string interpolation- It is a data binding technique where we can bind data from typescript to html or template or control to dom


*************************Data binding technique no 2------Property binding ***************************************

Open app.component.ts file


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
  city: string="Hyderabad"
  //{{propertyName}}
  //[attribute]="propertyName"
  myName="Shreya"

}


Open app.component.html

<div> Hello! Welcome to Angular learning</div> 
<!-- static data -->
<!-- This will get displayed on MyApplication -->
<p>{{title}}</p>
<p>{{a}}</p>
<div>{{city}}</div>
{{city}}

<!-- data came from property -->

<input type="text" value="Tambe">
<input type="text" [value]="myName">  //property binding
<!-- property binding -->
<app-home></app-home>


Output on myApplication:

Hello! Welcome to Angular learning

myApplication


20


Hyderabad

Hyderabad
Tambe

Shreya

home works!

//Property binding is used for input box mostly

//can we using string interpolation for input box?- Yes but generally no because some fields like disable maky break

<div> Hello! Welcome to Angular learning</div> 
<br>
<!-- static data -->
<!-- This will get displayed on MyApplication -->
<p>{{title}}</p>
<br>
<p>{{a}}</p>
<br>
<div>{{city}}</div>
<br>
{{city}}
<!-- data came from property -->
<br>
<input type="text" value="Tambe">
<br>
<input type="text" [value]="myName">  
<!-- property binding -->
<br>
<input type="text" value="{{myName}}">  //string interpolation
<app-home></app-home>


Output-
Hello! Welcome to Angular learning

myApplication


20


Hyderabad

Hyderabad
Tambe

Shreya

Shreya
 //string interpolation
home works!



with value, string interpolation works, if we use disable is false
Eg-
app.component.html

<div> Hello! Welcome to Angular learning</div> 
<br>
<!-- static data -->
<!-- This will get displayed on MyApplication -->
<p>{{title}}</p>
<br>
<p>{{a}}</p>
<br>
<div>{{city}}</div>
<br>
{{city}}
<!-- data came from property -->
<br>
<input type="text" value="Tambe">
<br>
<input type="text" [value]="myName">  
<!-- property binding -->
<br>
<input type="text" value="{{myName}}">  //string interpolation
<br>
<input type="text" [disabled]="isDisable">   //input box will get enabled
<br>
<!-- gives blank box -->
<input type="text" disabled="{{isDisable}}"> //input box will not get enabled in string interpolation
<app-home></app-home>


app.component.ts

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
  city: string="Hyderabad"
  //{{propertyName}}
  //[attribute]="propertyName"
  myName="Shreya"
  isDisable=false
 
  

}


Output: 
Hello! Welcome to Angular learning

myApplication


20


Hyderabad

Hyderabad
Tambe

Shreya

Shreya       //string interpolation
               //input box will get enabled
                 //input box will not get enabled in string interpolation
home works!







Is string interpolation only for string data type? No- Any data type
What is property binding? Data binding technique specially made for input tags, symbol is []















**************************************Event data binding*****************************************************
On user action, value should be set or displayed, we use event data binding technique. Example- button

app.component.html

<div> Hello! Welcome to Angular learning</div> 
<br>
<!-- static data -->
<!-- This will get displayed on MyApplication -->
<p>{{title}}</p>
<br>
<p>{{a}}</p>
<br>
<div>{{city}}</div>
<br>
{{city}}
<!-- data came from property -->
<br>
<input type="text" value="Tambe">
<br>
<input type="text" [value]="myName">  
<!-- property binding -->
<br>
<input type="text" value="{{myName}}">  //string interpolation
<br>
<input type="text" [disabled]="isDisable">   //input box will get enabled
<br>
<!-- gives blank box -->
<input type="text" disabled="{{isDisable}}"> //input box will not get enabled in string interpolation
<br>
<button (click)="press()">Submit</button>

<div>{{fruit}}</div> 
<!-- initially div tag mango will not be visible in output -->
<!-- When you click on submit in UI, then only mango will be visible on UI -->
<app-home></app-home>


app.component.ts

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
 
  
  constructor(){}

  press()
  {
   this.fruit="Mango"  //this keyword is used when we reuse previously defined variable to assign value to it in function
  }


}


Output:

Hello! Welcome to Angular learning

myApplication


20


Hyderabad

Hyderabad
Tambe

Shreya

Shreya
 //string interpolation
 //input box will get enabled
 //input box will not get enabled in string interpolation
Submit
Mango
home works!


################ There are 2 types of data binding
1) One way data binding        2) Two way data binding

1) One way data binding has 3 subtypes
a)-String interpolation>> Symbol: {{}} >> syntax: {{propertyName}}
b)-Property binding >> Symbol: [] >> syntax: [attribute]="propertyName
c)-Event binding >> Symbol () >> on event will bind data to the property

2) Two- way data binding >> Symbol:  [()] >> Syntax: [(ngModel)]="propertyName"












################################################ 28 Dec #######################################################################


******************************** Two way data binding *************************************************************************

app.component.html

<!-- Two way data binding -->
<br>
<input type="text" [(ngModel)]="FavFruit"> Enter your favourite fruit
<br>
{{FavFruit}}
<app-home></app-home>


app.component.ts


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
  FavFruit="Apple"; /////////////////////Only this line added
  
  constructor(){}

  press()
  {
   this.fruit="Mango"  //this keyword is used when we reuse previously defined variable to assign value to it in function
  }


}



app.module.ts


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';    /////////////////////Automatically added

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ////////////////////////////Only this line added
  ],
  providers: [],
  bootstrap: [AppComponent]



Output


Apple 
 Enter your favourite fruit
Apple
home works!


if i edit enter your fav fruit of html, ts down text will also get updated, so 2 way data binding i.e ts to html and html to ts

Property gets updated and also needs to be stored in  backend, so 2 way data binding



Data Binding in Angular 8
Data binding is the core concept of Angular 8 and used to define the communication between a component and the DOM. It is a technique to link your data to your view layer. In simple words, you can say that data binding is a communication between your typescript code of your component and your template which user sees. It makes easy to define interactive applications without worrying about pushing and pulling data.

Data binding can be either one-way data binding or two-way data binding.


One-way databinding
One way databinding is a simple one way communication where HTML template is changed when we make changes in TypeScript code.


Two-way Data Binding
We have seen that in one-way data binding any change in the template (view) were not be reflected in the component TypeScript code. To resolve this problem, Angular provides two-way data binding. The two-way binding has a feature to update data from component to view and vice-versa.

In two way data binding, property binding and event binding are combined together.

Syntax:

[(ngModel)] = "[property of your component]"  


Business logic is written in ts file



########################################################### 31 Dec ########################################################
app-routing.module.ts, we write routing code

app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path : "", component: HomeComponent}       /////////////////////////added this. If path is empty then default component is assigned as home component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




app.component.html
remove <app-home></app-home>
write <router-outlet></router-outlet>
UI redirection not possible if u do not write router-outlet

Generally don't write anything other than <router-outlet></router-outlet> in app.component.html
so create new component named data binding
PS E:\oct2023\octBatch\Angular\myApplication> ng g c databinding
Node.js version v19.8.1 detected.
Odd numbered Node.js versions will not enter LTS status and should not be used for production. For more information, please see https://nodejs.org/en/about/releases/.
CREATE src/app/databinding/databinding.component.html (26 bytes)
CREATE src/app/databinding/databinding.component.spec.ts (594 bytes)
CREATE src/app/databinding/databinding.component.ts (222 bytes)
CREATE src/app/databinding/databinding.component.css (0 bytes)
UPDATE src/app/app.module.ts (632 bytes)



The Router-Outlet is a directive that's available from the router library where the Router inserts the component that gets matched based on the current browser's URL. You can add multiple outlets in your Angular application which enables you to implement advanced routing scenarios.


home.component.html

<p>home works!</p>
<button>data binding</button> ///added this

Cut code of app.component.html except router line and paste it in databinding.component.html

