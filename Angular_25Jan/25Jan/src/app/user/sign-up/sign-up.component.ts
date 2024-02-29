import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpForm!: FormGroup;
  visible=false;
  visibleConfirm=false;
  matched=false;

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
        fullName:['Shreya Vaidya',[Validators.required, this.whtSpcRmvValidator]],
        //fullName is string, so first parameter is empty string.
        mob:[7385323974,[Validators.maxLength(50), Validators.pattern("^[0-9]*$")]],
        //mobile number is number, so first parameter is null
        //Here maxLength is in camel case
        gender:['female'],
        pan:[],
        password:[],
        confirmPass:[],
        tc:['', Validators.requiredTrue],
       
        //Syntax will always be variable:['empty value or value type', Validators.property]

      })

  }
  //visible password function should always be written outside formDetails()

 visiblePassword()
      {
        this.visible=!this.visible;
      }

      visibleConfirmPassword()
      {
        this.visibleConfirm=!this.visibleConfirm;
      }

      passMatch()
      { 
        if(this.signUpForm.value.confirmPass!=null)
        {
        if(this.signUpForm.value.password==this.signUpForm.value.confirmPass ) 
        {
          this.matched=false;
        }
        else
        {
          this.matched=true;
        }
      }
    }

    submit()
    {
      console.log('this.signUpForm.value', this.signUpForm.value);
      // console.log(this.signUpForm.value);
    }

    whtSpcRmvValidator(inptBxValue:any)
    {
      // /\s{1,}/g
      //if it has more than 1 space, then it needs to be replaced by 1 space
      console.log('input value',inptBxValue);
      let spaceInclude= inptBxValue?.value?.includes('   ')
      return spaceInclude ? {'whiteSpaceError':true}:null
      //if it has whitespaceerror then retur true else return null
    }
}
