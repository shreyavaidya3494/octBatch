let text="shreya tambe  vaidya"
console.log("Length of text including spaces is: ", text.length); //length counts the spaces as well alongwith letters //20
//length operator or property calculates the length of array or a string

let string2="*I# love3 mangoes";
console.log("length of string2 is: ", string2.length); //17

//Javascript-Slice- Slice() extracts a part of a string and returns the extracted part in a new string.
//The method takes 2 parameters: start position, and end position (end not included).

console.log("Slicing from 2 to 14 :", string2.slice(2,14)); //14 is excluded //# love3 mang

console.log("Slicing from 12 to 2 :", string2.slice(12,2)); //Output will not come

console.log("Slicing from -1 to -6 :", string2.slice(-1,-6)); //output will not come

console.log("Slicing from -13 to -2 :", string2.slice(-12,-2)); //output will exclude -2 // ove3 mango

console.log("Slicing from 8 :", string2.slice(8)); //Nothing at end index means till last point // 3 mangoes

console.log("Slicing from -3 :", string2.slice(-3)); //oes