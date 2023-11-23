//Boolean data type- It has 2 reserved keywords i.e. true , false
//Javascript is case sensitive
//true, false are reserved keywords, not TRUE or True

let isFavMovie= true;
console.log("Is Jab we met my fav movie?",typeof(isFavMovie)); //Output: boolean

let IsFavMovie= "false";
console.log("Is Jab we met my fav movie?",typeof(IsFavMovie)); // Output: string

//undefined- We are not assigning any value to the variable taken, so a variable which is not yet defined is undefined datatype
let a;
console.log("a=",a); // a=undefined
console.log("Type of a is", typeof(a)); //Type of a is undefined

let b=undefined;
console.log("datatype of b is", typeof(b)); //datatype of b is undefined

let c="undefined";
console.log("datatype of c is", typeof(c)); //datatype of c is string

//let true="shreya"; // Syntax error:We cannot use reserved keyword as variable name. True can be used as variable as its not a keyword

//Can variable get overwritten? Yes as follows
let d=6;
d=9;
d=11;
console.log("value of d at 1st ask : ", d); //value of d at 1st ask: 11
d=13;
d=1;
console.log("value of d at 2nd ask : ", d); //value of d at 2nd ask :1


