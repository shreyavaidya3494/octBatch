import { Component } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  name="Vaidya"
  isShowPass=false;
login(data:any)
{
  console.log(data)
}

ToShowPassword()
{
this.isShowPass=!this.isShowPass;
}
}
