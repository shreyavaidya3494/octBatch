import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { Sub1Component } from './sub1/sub1.component';

const routes: Routes = [
  {path:'adminLanding', component:AdminLandingComponent},
  {path: 'sub1', component:Sub1Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
