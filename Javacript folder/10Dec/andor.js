if (2<12)
{
    console.log("Pass");
}
else
{
    console.log("Fail");
}
//pass

/*Comparing data of different types may give unexpected results.
When comparing a string with a number, JavaScript will convert the string to a number when doing the comparison.
 An empty string converts to 0. A non-numeric string converts to NaN which is always false*/

 if(3<"John")
 {
    console.log("Correct");
 }
 else
 {
    console.log("incorrect");
 } 
 //incorrect


 if("x">"y")
 {
    console.log("Right");
 }
 else
 {
    console.log("Wrong");
 } 
//Wrong


if("2">"y")
 {
    console.log("right");
 }
 else
 {
    console.log("wrong");
 } 
//wrong



let x=35;
if(x>=18 && x<=30 )
{
    console.log("No problem in conceiving");
}
else
{
console.log("IVF");
}


let actress="Katrina";
let actor="Vicky";
if (actress=="Alia" || actor=="Ranbir"|| actress=="Katrina")
{
    console.log("wrong Alia+ wrong Ranbir+ right Katrina is equal to right");
}
else
{
console.log("Else executed for Alia, Ranbir, Katrina");
}
//wrong Alia+ wrong Ranbir+ right Katrina is equal to right


let b=28;
let w=30;
let s=35;
if(b>=34|| w<=30 && s<=29) //0+1*0=0
{
console.log("good figure");
}
else
{
console.log("bad figure");
}
//bad figure


/*
and means *
or means +
true means 1
false means 0
*/

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
//q 1 is lesser than p 2


