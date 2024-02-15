import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpForm!: FormGroup;

  constructor(private formBuilder : FormBuilder){}

  ngOnInit()
  {
    this.formDetails();
  }

  formDetails()
  {
    this.signUpForm=this.formBuilder.group
    (
      {
        fullName:[],
        mob:[],
        gender:[],
        pan:[],
        password:[],
        confirmPass:[]

      })
  }
}
