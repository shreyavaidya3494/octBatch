let a="none";
console.log("Datatype of a:", typeof(a));


//In JavaScript null is "nothing". It is supposed to be something that doesn't exist. 
//Unfortunately, in JavaScript, the data type of null is an object. 
//You can consider it a bug in JavaScript that typeof null is an object.
let b=null;
console.log("Datatype of b:", typeof(b)); //This gives output on console of HTML output window
document.write("Datatype of b:", typeof(b), "<br>"); //This gives output on HTML window

let cash=999999999999999; //15 digits
console.log("Datatype of cash:", typeof(cash));
document.write("cash=", cash, "<br>", "Datatype of cash in document write:", typeof(cash), "<br><br>"); //<br> for next line

let money=9999999999999999 //16 digits, gets rounded off to money+1 in output if digits count>15
console.log("Datatype of money:", typeof(money));
document.write("money=", money, "<br>", "Datatype of money in document write:", typeof(money), "<br><br>"); //<br> for next line


//If digits>16, then it automatically gets rounded off to next number, but in banking we don't want this, so we change the data type
let amount=BigInt("99999999999999999") //17 digits
console.log("Datatype of amount:", typeof(amount));
document.write("amount=", amount, "<br>", "Datatype of amount in document write:", typeof(amount), "<br><br>");

//Array: Heterogeneous list of elements. To store multiple values under one variable
let colors=['red','blue','green','yellow','orange']; //Homogeneous array

var Std=["Shreya",89.67678, 91, "76", 91]; //Heterogeneous array

console.log(colors, "<br>","dtype of colors:",typeof(colors), "<br");
document.write(colors,"<br>", "dtype:", typeof(colors), "<br>");

console.log(Std,"<br>", "dtype:", typeof(Std), "<br");
document.write(Std, "<br>", "dtype:", typeof(Std), "<br><br>");

function Kareena()
{
return "Taimur, Jeh";
}

let ar=[Anushka(),"alia",30,"Katrina",43, Kareena(), Deepika()];
console.log(ar, "<br>","dtype of ar:",typeof(ar), "<br");
document.write(ar,"<br>", "dtype:", typeof(ar), "<br>");

function Deepika()
{

}

function Anushka()
{
    return 2*3;
}


//Array indexing- Indexing starts from 0.
document.write("<br>", "Display index no 5 of ar :" , ar[5]);
console.log("Display index no 5 of ar :" , ar[5]);

document.write("<br>", "Display index no 7 of ar :" , ar[7]); //negative test case
console.log("Display index no 7 of ar :" , ar[7]);

document.write("<br>", "Display index no -1 of ar :" , ar[-1]); //negative test case
console.log("Display index no -1 of ar :" , ar[-1]);
