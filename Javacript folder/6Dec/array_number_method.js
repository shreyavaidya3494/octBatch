/*JavaScript Array delete()-Warning !
Array elements can be deleted using the JavaScript operator delete.
Using delete leaves undefined holes in the array.
Use pop() or shift() instead.*/

const months=["Jan","Feb","Mar","Apr","May"];
d=delete months[1];
console.log("months :", months); //months : (5) ['Jan', empty, 'Mar', 'Apr', 'May']
console.log("d : ", d); //d :  true
console.log("Month at index 1 is ",months[1]); //Month at index 1 is  undefined
console.log(months.length); //5


//JavaScript Array splice()
// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.
// Syntax
// array.splice(index, howmany, item1, ....., itemX)
/*index	Required.
The position to add/remove items.
Negative value defines the position from the end of the array.
howmany	Optional.
Number of items to be removed.
item1, ..., itemX	Optional.
New elements(s) to be added*/

// Return Value
// An array containing the removed items (if any).

const actress=["Katrina","Alia","Deepika","Kiara","Kareena","Sonam","Janhavi","Suhana","Ananya","Anushka","Rashmika","Sara"];
a=actress.splice(2,4,"Aishwarya","Rani","Kajol","Karishma");
console.log("actress =", actress); //actress = (12) ['Katrina', 'Alia', 'Aishwarya', 'Rani', 'Kajol', 'Karishma', 'Janhavi', 'Suhana', 'Ananya', 'Anushka', 'Rashmika', 'Sara']
console.log("a=", a); //a= (4) ['Deepika', 'Kiara', 'Kareena', 'Sonam']

const actor=["Vicky","Ranbir","Ranveer","Siddharth","Saif","Anand"];
b=actor.splice(4,5,"Shahid","Hritik","Varun","Agastya");
console.log("actor=",actor); //actor= (8) ['Vicky', 'Ranbir', 'Ranveer', 'Siddharth', 'Shahid', 'Hritik', 'Varun', 'Agastya']
console.log("b=",b); //(2) ['Saif', 'Anand']

//JavaScript Array slice()
/*The slice() method returns selected elements in an array, as a new array.
The slice() method selects from a given start, up to a (not inclusive) given end.
The slice() method does not change the original array.
Syntax
array.slice(start, end)
Parameters
Parameter	Description
start	Optional.
Start position. Default is 0.
Negative numbers select from the end of the array.
end	Optional.
End position. Default is last element.
Negative numbers select from the end of the array*/

//Return Value :A new array containing the selected elements.

const cricket=["Virat","Rohit","Sami","Sachin","Yuvraj","KL Rahul","Dravid"];
e=cricket.slice(3,5);
f=cricket.slice(-6,-2);
console.log("e=",e); //(2) ['Sachin', 'Yuvraj']
console.log("f=",f); //f= (4) ['Rohit', 'Sami', 'Sachin', 'Yuvraj']

/*JavaScript Number Methods
These number methods can be used on all JavaScript numbers:
Method	Description
toString()	Returns a number as a string
toExponential()	Returns a number written in exponential notation
toFixed()	Returns a number written with a number of decimals
toPrecision()	Returns a number written with a specified length
ValueOf()	Returns a number as a number*/

/*The toString() Method
The toString() method returns a number as a string.
All number methods can be used on any type of numbers (literals, variables, or expressions)*/

let g=34/3;
let h=g.toString();
console.log("g=",g); //g= 11.333333333333334
console.log("h=",h); //h= 11.333333333333334
console.log("Datatype of g=", typeof(g)); //Datatype of g= number
console.log("Datatype of h=", typeof(h)); //Datatype of h= string

/*The toExponential() Method
toExponential() returns a string, with a number rounded and written using exponential notation.
A parameter defines the number of characters behind the decimal point
The parameter is optional. If you don't specify it, JavaScript will not round the number.*/

let x = 9.656;
let w=x.toExponential(2);
let y=x.toExponential(4);
let z=x.toExponential(6);
// let v=x.toExponential(-2);
console.log("w=",w); //w= 9.66e+0
console.log("y=",y); //y= 9.6560e+0
console.log("z=",z); //z= 9.656000e+0
//console.log("v=",v); //arraymethod.js:92 Uncaught RangeError: toExponential() argument must be between 0 and 100 //at Number.toExponential (<anonymous>)


//The toFixed() Method
//toFixed() returns a string, with the number written with a specified number of decimals
let m = 9.656;
console.log(m.toFixed(0)); //10
console.log(m.toFixed(2)); //9.66
console.log(m.toFixed(4)); //9.6560
console.log(m.toFixed(6)); //9.656000

/*The toPrecision() Method
toPrecision() returns a string, with a number written with a specified length*/
let p = 9.656;
console.log(p.toPrecision()); //9.656
console.log(p.toPrecision(2)); //9.7
console.log(p.toPrecision(4)); //9.656
console.log(p.toPrecision(6)); //9.65600


/*The valueOf() Method
valueOf() returns a number as a number*/

let q = 123.87;
console.log(q.valueOf()); //123.87
console.log((123.87).valueOf()); //123.87
console.log((101 + 23).valueOf()); //124