//JavaScript Arrow Function-Arrow functions allow us to write shorter function syntax

/*
Advantages of Arrow Functions
Arrow functions reduce the size of the code.
The return statement and function brackets are optional for single-line functions.
It increases the readability of the code.
Arrow functions provide a lexical this binding. 
It means, they inherit the value of “this” from the enclosing scope. 
This feature can be advantageous when dealing with event listeners or callback functions where the value of “this” can be uncertain.
*/

function test()
{
    return "Shreya";
}

//or

test=function()
{
    return "shreya";
}

//or

test=() =>
{
    return "shreya";
}

//or

test=() => "shreya"