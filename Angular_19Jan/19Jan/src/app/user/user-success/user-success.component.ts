import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-user-success',
  templateUrl: './user-success.component.html',
  styleUrls: ['./user-success.component.css']
})
export class UserSuccessComponent {
name: any;
constructor(private userDataService : UserDataService, private router: Router) {}

ngOnInit()
{
  this.name= this.userDataService.userName;
}
}
