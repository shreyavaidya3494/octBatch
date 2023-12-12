//Ternary operator- Its like if else but it different form

let marks=30;
marks<35 ? console.log("Fail") : console.log("Pass");

//Function should always contain parathesis at the end. Keyword function should always be written.
//Functions is of 2 types- Parameterized & non-parameterised
//If u write code in function, it will not execute, unless and untill you call the function

function takeInput()
{
  console.log("function takeinput is getting called");
  console.log("f1");  
}
//user will click on click here button in html window, to call the function manually, then only these 2 console.log with get printed in console tab of inspect


function condition()
{
   
    hero="ranveer";
    if (hero=="varun"||hero=="ranbir"||hero=="kartik")
    {
        console.log("alia can marry him");
    }
    else
    {
        console.log("alia can only do movies with him");
    }

   
}

function multipleConditions()
{
    let monthno=4;
    switch(monthno)
    {
       case 1:
           console.log("Jan");
           break;
       
       case 2:
           console.log("Feb");
           break;
       
       case 3:
           console.log("Mar");
           break;
   
       case 4:
           console.log("Apr");
           break;
   
       case 5:
           console.log("May");
           break;
       
       case 6:
           console.log("Jun");
           break;
   
       default:
           console.log("H2");
           break;
    }
    
}



function logicalOperators()
{
    p=true||false||true||true&false; //1+0+1+1*0=2
q=false&&true&&true||true*true||true*false  //0*1*1+1*1+1*0=1
if(q>p)
{
console.log("q 1 is greater than p 2");
}
else
{
    console.log("q 1 is lesser than p 2");
}
}


function userName(name)
{
console.log(name);
}

function userPassword(password)
{
console.log(password);
}