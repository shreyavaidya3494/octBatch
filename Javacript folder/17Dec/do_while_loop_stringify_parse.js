//do while loop- loop will run at least once.

let f=43;
do{
    console.log(f);
    f--
}
while(f>32)
//43 42 41 40 39......33


let g=4;
do{
    console.log(g);
    g++
}
while(g==3)
//4

//if increment or decrement operator is not given, then infinite loop


// string to number data type conversion
let v="876546";
let w=parseInt(v);
console.log(w); //876546
console.log(typeof(w)); //number

let v1="abcd";
let w1=parseInt(v1);
console.log(w1); //NaN
console.log(typeof(w1)); //number


//Javascript JSON
/*JSON is a format for storing and transporting data.
JSON is often used when data is sent from a server to a web page.*/

/*
What is JSON?
JSON stands for JavaScript Object Notation
JSON is a lightweight data interchange format
JSON is language independent *
JSON is "self-describing" and easy to understand
* The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only. 
Code for reading and generating JSON data can be written in any programming language.
*/

// JSON Example
// This JSON syntax defines an employees object: an array of 3 employee records (objects):

// JSON Example

let a=
{
employees:[
  {"firstName":"John", "lastName":"Doe"},
  {"firstName":"Anna", "lastName":"Smith"},
  {"firstName":"Peter", "lastName":"Jones"}
],
city:"Pune",
color: ["red","blue","green"],
status:true,
3:"three",
four:4
}

//when u have to send data to backend then it must be in string

console.log(typeof(a)); //object

let b=JSON.stringify(a); //stringify is used to make all the keys string

console.log(b);
/*
{"3":"three","employees":[{"firstName":"John","lastName":"Doe"},{"firstName":"Anna","lastName":"Smith"},
{"firstName":"Peter","lastName":"Jones"}],"city":"Pune","color":["red","blue","green"],"status":true,"four":4}
*/

console.log(typeof(b)); //string

//data comes in the form of string from backend, but we want data in the form of object in front end
//so we convert backend's string to object

let c=JSON.parse(b);
console.log(c);
console.log(typeof(c)); //object
/*
{3: 'three', employees: Array(3), city: 'Pune', color: Array(3), status: true, four: 4}
Object
*/

/* JSON means API data comes in JSON form only. 
Front end data is stored in backend in JSON form and retrieved to front end by stringifying JSON to object