//The concat() method joins two or more strings.

//The concat() method does not change the existing strings.

//The concat() method returns a new string.

//Syntax: string.concat(string1, string2, ..., stringX)

let a="Shreya";
let b="Tambe";
let c="Vaidya";
console.log("Full name is ",a.concat(" ",b," ",c));

//The trim() method removes whitespace from both sides of a string. Start and end but not middle spaces

//The trim() method does not change the original string.

//string.trim()

let d="    Hello  !      I am Shreya      ";
console.log("Trimmed text is :",d.trim());


//The trimStart() method removes whitespace from the beginning of a string.

//The trimStart() method does not change the original string.

//The trimStart() method works like trim(), but removes whitespace only from the start of a string.

let e="      I love to eat idli....       ";
console.log("Using Trim start:",e.trimStart(),"done");

//The trimEnd() method removes whitespace from the end of a string.

//The trimEnd() method does not change the original string.

//The trimEnd() method works like trim(), but removes whitespace only from the end of a string.

let f="     I want to eat maggi! !        ";
console.log("Using Trim end:",e.trimEnd(),"done");


//The padStart() method pads a string from the start.

//The padStart() method pads a string with another string (multiple times) until it reaches a given length.

//Syntax: string.padStart(length, string)

let numb = 5;
let text = numb.toString();
let padded = text.padStart(4,"0");
console.log("Padded no is ",padded)


let n=9;
let na=n.toString();
console.log("Pad end no is", na.padEnd(7,"1"));


//The charAt() method returns the character at a specified index (position) in a string.
//The index of the first character is 0, the second 1, ...
//string.charAt(index)

let string1= "I've got a very good life! "
console.log("Index 1:", string1.charAt(1));


//The split() method splits a string into an array of substrings.
//The split() method returns the new array.
//The split() method does not change the original string.
//If (" ") is used as separator, the string is split between words.
//Syntax:string.split(separator, limit)

let dob="03-04-1994";
let split_dob=dob.split("-");
console.log("Splitting DOB:",split_dob );
console.log("Birth Year is ", split_dob[2]);

let fruit="apple/mango/banana/ornage/grapes";
console.log("cut fruit",fruit.split("/",3));