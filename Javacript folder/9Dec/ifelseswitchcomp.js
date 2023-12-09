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

 //Output: Apr


 //break is used, so compiler will not go ahead for next cases, but not mandatory
 //Difference between switch and if else if
 //Both are used for multiple condition testing
 //if - we write expressions
 //switch- we match with values
 //default is just like else- not mandatory, but if will will give blank output incase of no match

//  Operator	Description	Comparing	Returns	Try it
// ==	equal to	x == 8	false	
// x == 5	true	
// x == "5"	true	
// ===	equal value and equal type	x === 5	true	
// x === "5"	false	
// !=	not equal	x != 8	true	
// !==	not equal value or not equal type	x !== 5	false	
// x !== "5"	true	
// x !== 8	true	
// >	greater than	x > 8	false	
// <	less than	x < 8	true	
// >=	greater than or equal to	x >= 8	false	
// <=	less than or equal to	x <= 8	true

let a=5; //asignment operator "="----(i)




let b=6;
if(b=="6") //equal to operator "=="-----(ii)
{
    console.log("==operator justified for b=='6'");
}
//Output:==operator justified for b=='6'






let c=7;
if(c==="7") //equal value and equal type "==="--------(iii)
{
    console.log("c:Yes");
}
else
{
    console.log("c:No");
}
//Output: c:No

let d="8";
if(d==="8") //equal value and equal type "==="--------(iii)
{
    console.log("d:Yes, value and type are same");
}
else
{
    console.log("d:No");
}
//Output: d:Yes, value and type are same


let e=9;
if(e===1) //equal value and equal type "==="--------(iii)
{
    console.log("e:Yes, value and type are same");
}
else
{
    console.log("e:No");
}
//Output: e:No





///(iv) Greater than, less than
f=20;
if (f>20)
{
    console.log("f greater than 20");
}
else if (f<20)
{
    console.log("f is less than 20");
}
else
{
    console.log("f is equal to 20");
}
//Output:f is equal to 20


//(v) greater than equal to, less than equal to
g=10;
if (g>10)
{
    console.log("g is greater than 10");
}
else if (g<=10)
{
    console.log("g is less than equal to 10");
}
else
{
    console.log("g is equal to 10");
}
//Output: g is less than equal to 10




//(vi) Not equal to
let h=2;
if(h!=2)
{
    console.log("h is not equal to 2");
}
else
{
    console.log("h is equal to 2");
}
//Output:h is equal to 2





//(vii) not equal value or not equal type
let i="3";
if(i!=3)
{
    console.log("i not '3'");
}
else
{
    console.log("i is '3'")
    console.log(typeof(i));
}
//Output:i is '3'    string




let j=true;
if (j)
{
    console.log("compiler j goes inside")
}
else
{
console.log("compiler j does not go inside")
}
//compiler j goes inside


let k=false;
if (k)
{
    console.log("compiler k goes inside")
}
else
{
console.log("compiler k does not go inside")
}
//compiler k does not go inside



let l=-2;
if(l)
{
    console.log("compiler l goes inside")
}
else
{
console.log("compiler l does not go inside")
}
//compiler l goes inside


let m=0;
if(m)
{
    console.log("compiler m goes inside")
}
else
{
console.log("compiler m does not go inside")
}
//compiler m does not go inside



let n=-0;
if(n)
{
    console.log("compiler n goes inside")
}
else
{
console.log("compiler n does not go inside")
}
//compiler n does not go inside


let p=undefined;
if(p)
{
    console.log("compiler p goes inside")
}
else
{
console.log("compiler p does not go inside")
}
//compiler p does not go inside


let q=null;
if(q)
{
    console.log("compiler q goes inside")
}
else
{
console.log("compiler q does not go inside")
}
//compiler q does not go inside


let r=null;
if(!r)
{
    console.log("compiler r goes inside")
}
else
{
console.log("compiler r does not go inside")
}
//compiler r goes inside

let s=false;
if(!s)
{
    console.log(" compiler s goes inside");
}
// compiler s goes inside


// let t=Tambe;//ifelseswitchcomp.js:286 Uncaught ReferenceError: Tambe is not defined
// at ifelseswitchcomp.js:286:7
// if (t)
// {
//     console.log("t goes inside");
// }
// else
// {
//     console.log("t doesn't go inside");
// } 


let t="Tambe";
if(t)
{
    console.log("compiler t goes inside")
}
else
{
console.log("compiler t does not go inside")
}
//compiler t goes inside




let u="Vaidya";
if(!u)
{
    console.log("compiler u goes inside")
}
else
{
console.log("compiler u does not go inside")
}
//compiler u does not go inside



let v=null;
if(!v)
{
    console.log("compiler v goes inside")
}
else
{
console.log("compiler v does not go inside")
}
//compiler v goes inside


//If some integer, true value is there in if, then it considers it as true and compiler goes inside if
//null, undefined, 0 , false- compiler doesn't go inside if