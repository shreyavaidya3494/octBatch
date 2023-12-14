let a=8;
let b=2;

function multiplication()
{
    var res=a*b;
    console.log("res=",res);
    multiplication2(res)
    
}

function multiplication2(result)
{
let res1=10*result;
console.log("res1=",res1);
}


//let var const difference


//let keyword has block level scope
/*function test()
{
let c=40;
if (c>20)
{
    let d=5; //cannot access d out of this if block
}
let e=c/d;
console.log("e=",e);
}
*/
//function.js:30 Uncaught ReferenceError: d is not defined
//at test (function.js:30:9)
//at HTMLButtonElement.onclick (function.html:8:26)


//var keyword has function level scope
function test1()
{
let c=40;
if (c>20)
{
    var d=5; //can access d outside if block because var keyword is there before d
}
let e=c/d;
console.log("e=",e);
}
// e= 8


//here d is declare outside if block, so accessible in entire function
function test2()
{
let c=40;
let d=5; //Here let, var, const will give same output as its declared outside if block
if (c>20)
{
 console.log("d in test2: ",d); //can access d outside if block because var keyword is there before d
}
let e=c/d;
console.log("e in test2=",e);
}
// d in test2:  5
// function.js:62 e in test2= 8



//var
function test3()
{
    let a=40;
    var b=5;
    if(a>20)
    {
        var b=6;
        console.log("b in if in test3=",b);
    }
    console.log("b outside if in test3 is",b);
    let c=a/b;
    console.log("c in test3 is",c);
}
// //b in if in test3= 6
// function.js:77 b outside if in test3 is 6
// function.js:79 c in test3 is 6.666666666666667



function test4()
{
    let a=40;
    var b=5;
    if(a>20)
    {
        let b=6; //gives block level scope
        console.log("b in if in test4=",b);
    }
    console.log("b outside if in test4 is",b);
    let c=a/b;
    console.log("c in test4 is",c);
}
// //b in if in test4= 6
// function.js:99 b outside if in test4 is 5
// function.js:101 c in test4 is 8



//redeclaration is not possible with let keyword
// let a1=5; 
// let a1=8; //cannot redeclare


//redeclaration is possible with var keyword
var a1=5; 
var a1=8; //can redeclare
console.log("a1 in var:", a1);
//a1 in var:8


//Hosting posiible with var keyword but not possible with const/let

// t=60;
// let t; 
//function.js:122 Uncaught ReferenceError: Cannot access 't' before initialization at function.js:122:2

// u=7;
// const u;
//Uncaught SyntaxError: Missing initializer in const declaration (at function.js:128:7)


v=8; //nothing means var
var v;
console.log("v=",v);
//v= 8

//const is used for initialize and declaration. Value will never change
const z=3; //in const, value never changes, it willremain fixed i.e. z=3
console.log("z=",z);
//z= 3


//variable in scope, not outside then let

//variable should be accessible everywhere then var


//Reassigning value is possible with let and var but not possible with const
let s=55;
s=66;
console.log("s=",s); //66

var q=77;
q=88;
console.log("q=",q); //88


const r=1;
r=2;
console.log("r=",r);
//function.js:159 Uncaught TypeError: Assignment to constant variable. at function.js:159:2



