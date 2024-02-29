import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
 @Input() cityFromParent: any;
 @Output() dataFromChild= new EventEmitter<any>();
 state="MH-09";



 dataFromChildParent()
{
  this.dataFromChild.emit(this.state);
}
}
