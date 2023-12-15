// 4 loops in js- for, for of, for if, do while
//Loops are handy, if you want to run the same code over and over again, each time with a different value.

/*JavaScript supports different kinds of loops:

for - loops through a block of code a number of times
for/in - loops through the properties of an object
for/of - loops through the values of an iterable object
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true
*/

/*The For Loop
The for statement creates a loop with 3 optional expressions:

for (expression 1; expression 2; expression 3) {
  // code block to be executed
}
Expression 1 is executed (one time) before the execution of the code block.

Expression 2 defines the condition for executing the code block.

Expression 3 is executed (every time) after the code block has been executed.
*/

//I want to print numbers all odd numbers between 1 and 40 in reverse order using for loop

console.log("list of odd numbers from 40 to 1 in reverse order is: ")
for(let a=40; a>=1 ;a=a-1)
{
if(a%2!=0)
{
console.log(a);
}
}


//I want to print all flowers except hibiscus
console.log("all flowers except hibiscus are: ")
let list1=["rose","lily","lotus","tulip","hibiscus","mogra","marigold"];
for(let a=0 ; a<list1.length; a++)
{
    if(list1[a]!="hibiscus")
    {
        console.log(list1[a]);
    }
}

//Checking1
// for(;a<11;a++)
// {
//     console.log(a);
// }//forloop.js:50 Uncaught ReferenceError: a is not defined at forloop.js:50:7


//checking2
// for(let a=1; ;a++)
// {
//     console.log(a);
// }//infinte loop from 1 to................


// //checking3
// for(;;)
// {
//     console.log('b');
// }//infinte loop: b b b b......................


// //checking4
// for(a=1;;)
// {
//     console.log(a);
// }//infinte loop

//array push using loop
let color=["red","blue","black","green","pink","orange","purple","white"];
let color1=[];
for(let r=0; r<color.length ; r++)
{
if(color[r]!="blue")
{
    color1.push(color[r]);
}
}
console.log("array color is ", color);
console.log("array color1 is ", color1);

//array color is  (8) ['red', 'blue', 'black', 'green', 'pink', 'orange', 'purple', 'white']
//forloop.js:87 array color1 is  (7) ['red', 'black', 'green', 'pink', 'orange', 'purple', 'white']
