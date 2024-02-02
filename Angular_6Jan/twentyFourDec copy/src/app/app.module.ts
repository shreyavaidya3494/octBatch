import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { DatabindingComponent } from './databinding/databinding.component';
import { TestComponent } from './test/test.component';
import { DirectiveComponent } from './directive/directive.component';
console.log('app module calling...............');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DatabindingComponent,
    TestComponent,
    DirectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
