import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; //gets imported automatically
import { DatabindingComponent } from './databinding/databinding.component';
import { TestComponent } from './test/test.component';
import { DirectiveComponent } from './directive/directive.component';

// const routes: Routes = [];

const routes: Routes=
[
  {path: "", component: HomeComponent},
  // Set if path is empty, then home component
  {path: "databindingg", component: DatabindingComponent},
  // Set if path is databindingg, then conponent is databinding component
  {path: "testt", component: TestComponent},
  //same testt needs to be used there this.router.navigateByUrl('')
  {path: "directivee", component: DirectiveComponent},
  {path: "user", loadChildren:()=> import('./user/user.module').then(m=>m.UserModule)}
  //path:user can be anything, it will be visible on DOM, ./user is default folder, /user.module is default. Project part is now initialized,
  //boosting will be done in then m is reference Argument. it can be anything. It will point to module
  //Lazy loading will be done like this. Loadchildren method is used in this. 
  //Sent compiler to this designation './user/user.module' to import this module-UserModule, then boosted
  //SO console will be visible now 
  //now we have to go to login form

];                                     



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
