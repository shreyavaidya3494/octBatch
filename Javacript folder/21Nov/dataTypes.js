console.log("testing html js linkage to see this command in html output screen upon clicking on inspect and console");

// Datatypes in Javascript- Primitive and non-Primitive
// 1) Primitive-Means single value holder
// -Number->Takes whole number or decimal number.
// -String-> Take alphabets or alphanumeric values.Always in double or single quotes
// -Boolean
// -null
// -undefined
// -Symbol

// 2)Non-Primitive- means multi value holder
// -Object

// typeof is an operator which is used to get data type of a variable


let amount=95.8;
typeof(amount);
console.log("Data type of amount is ", typeof(amount)); //Data type of amount is  number

let x=4;
console.log("Data type of x is ", typeof(x)); //Data type of x is  number

let surname="Vaidya"
console.log("Data type of surname is ", typeof(surname)); //Data type of surname is  string

let surname2="Tambe3"
console.log("Data type of surname2 is ", typeof(surname2)); //Data type of surname2 is  string


let answer1=true;
console.log("Data type of answer1 is ", typeof(answer1));//Data type of answer1 is  boolean

let answer2=false;
console.log("Data type of answer2 is ", typeof(answer2));//Data type of answer2 is  boolean

let word='3456';
console.log("Data type of word is ", typeof(word)); //String because it is in souble quotes.Data type of word is  string

let value=null;
console.log("data type of null is", typeof(value)); //data type of null is object

let letter;
console.log("data type of letter is", typeof(letter)); //data type of letter is undefined

// To update the value of a variable-Variable can be updated but cannot be re-declared
let a=3;
a=5;
console.log("Value of a=",a); //Value of a= 5

let b=6;
let b=8;
console.log("Value of b:",b); //SyntaxError: Identifier 'b' has already been declared

