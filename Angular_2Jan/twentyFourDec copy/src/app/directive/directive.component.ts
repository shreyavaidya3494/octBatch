import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
showDiv:Boolean=true;
listItem=["Katrina","Kareena","Alia","Deepika","Sonam","Anushka","Kiara","Kriti","Aishwarya","Tapsee"];
color="Pink";
daughter="Vamika";
son="Taimur";

  toggle()
  {
   //this.showDiv=false;
   this.showDiv=!this.showDiv;
  }
  
}
