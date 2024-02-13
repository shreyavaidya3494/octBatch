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
bgColorName:any='Yellow';
nation:any='Pakistan';
journey:any='Student';
// This bgColorName value will come from backend

  toggle()
  {
   //this.showDiv=false;
   this.showDiv=!this.showDiv;
  }
  
  getColor()
  {
    return 'Magenta';
  }

  getBackColour()
  {
    return this.bgColorName;
  }
}
