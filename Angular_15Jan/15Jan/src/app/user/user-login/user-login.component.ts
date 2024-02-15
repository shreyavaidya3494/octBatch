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
  console.log(data);
  let userName=data.uName.replace(/\s+/g, ' ');
  console.log(userName);
  // request will be sent to backend, backend people will give us key userName, Password as mentioned in orange
  // this is used in api call
  let request=
  {
    "Username" : userName,
    "Password" : data.password
  }
}

ToShowPassword()
{
this.isShowPass=!this.isShowPass;
}
}
