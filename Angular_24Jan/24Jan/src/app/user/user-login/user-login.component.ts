import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/user-data.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  constructor(private userDataService : UserDataService, private router: Router) {}

  name="Vaidya"
  isShowPass=false;
login(data:any)
{
  console.log('data',data);
  // let userName=data.uName.replace(/\s+/g, ' ');
  // console.log(userName);
  // request will be sent to backend, backend people will give us key userName, Password as mentioned in orange
  // this is used in api call
  // let request=
  // {
  //   "Username" : userName,
  //   "Password" : data.password
  // }
  this.userDataService.userName=data.uName;
  this.router.navigateByUrl('/user/userSucc')
}

ToShowPassword()
{
this.isShowPass=!this.isShowPass;
}
}
