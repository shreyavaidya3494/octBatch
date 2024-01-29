import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
showDiv:Boolean=true;

  toggle()
  {
   //this.showDiv=false;
   this.showDiv=!this.showDiv;
  }
  
}
