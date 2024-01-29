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
  {path: "directivee", component: DirectiveComponent}
];                                     



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
