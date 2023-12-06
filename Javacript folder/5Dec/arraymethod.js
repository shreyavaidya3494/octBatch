//Array length: The length property returns the length (size) of an array
const fruits=["apple", "mango", "banana", "orange"];
let size=fruits.length;
console.log("Size of array fruits is ", size); //Size of array fruits is  4

//toString: The JavaScript method toString() converts an array to a string of (comma separated) array values.
let arr=[987, 34.7, "Shreya", true];
let arr1=arr.toString();
console.log("arr1 is ", arr1); //arr1 is  987,34.7,Shreya,true
console.log("Datatype of arr1 is ", typeof(arr1)); //Datatype of arr1 is  string

//Array pop(): The pop() method removes the last element from an array
//pop method returns the delete value

let a=["red","blue","green","yellow"];
let b=a.pop();
console.log("Pop returned value is ", b); //Pop returned value is  yellow
console.log("Original array will change to :", a); //Original array will change to : (3) ['red', 'blue', 'green']


//Array push(): The push() method adds a new element to an array (at the end)
let c=["potato","tomato","peas","cabbage"];
let d=c.push("carrot","beans","onion","tomato","brinjal");
console.log("Push returned added elements are :",d); //Returns length of new array //9
console.log("Original array c becomes ", c); //['potato', 'tomato', 'peas', 'cabbage', 'carrot', 'beans', 'onion', 'tomato', 'brinjal']

 //JavaScript Array shift() :The shift() method removes the first array element and "shifts" all other elements to a lower index.
 let e=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
 let f=e.shift();
 console.log("Shift returned elements: ",f); //Sunday
 console.log("Original array e changes to: ",e); //['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

 //JavaScript Array unshift() :The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements
 let g=["dog","cat",3,4.6,"lion","tiger"];
 let h=g.unshift("99",8.6,"zebra","lion");
 console.log("Unshift returned elements are :", h); //10
 console.log("Original array g now becomes ",g); //['99', 8.6, 'zebra', 'lion', 'dog', 'cat', 3, 4.6, 'lion', 'tiger']

 //The join() method returns an array as a string.
//The join() method does not change the original array.Any separator can be specified. The default is comma (,).
let i=["rose","lily","lotus",9.8,7,"tulip"];
let j=i.join("@  &*");
console.log("j=",j); //j= rose@  &*lily@  &*lotus@  &*9.8@  &*7@  &*tulip
console.log("i=",i); //i= (6) ['rose', 'lily', 'lotus', 9.8, 7, 'tulip']


//The concat() method concatenates (joins) two or more arrays.
//The concat() method returns a new array, containing the joined arrays.
//The concat() method does not change the existing arrays.

let k=["apple", "mango",["aplhonso","langda"],"grapes",["black","green"],"pear"];
let l=["tomato",["orange","red"],"potato",["sweet","salty"],"orange"];
let m=k.concat(l);
console.log("m=", m);//(11) ['apple', 'mango', Array(2), 'grapes', Array(2), 'pear', 'tomato', Array(2), 'potato', Array(2), 'orange']