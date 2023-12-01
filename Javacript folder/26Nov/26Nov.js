let arr=[]; //empty array
console.log("Printing empty array", arr , "dtype of empty array:", typeof(arr));
document.write("Printing empty array", arr , "<br>", "dtype of empty array:", typeof(arr), "<br>");
document.write("length of empty array: ", arr.length, "<br><br>");
console.log("lengthhh of empty array: ", arr.length);

let arra=["Cat", 8.9, 9.1, "3.2", 15.1];
document.write("length of arra: ", arra.length, "<br><br>");
console.log("lengthhh of arra: ", arra.length);

//Indexing starts from zero
//length starts from 1

//Object:{key:value}
let o={}; //empty object
console.log("Printing empty object",o);
console.log("Printing type of empty object",typeof(o));

ob={"Shreya":34, "Priyanka":36, "Ritika":32, "Shilpa":38};
document.write(ob, "<br>", "dtype of ob: ", typeof(ob), "<br>");
document.write("length of  key-value pair in array ob: ", ob.length,"<br>");
document.write("Indexing Priyanka: ", ob["Priyanka"]);
console.log(ob);

//Array of objects
details=[
    {name:"Alia", YOB:1993, Husband:"Ranbir"},
    {name:"Anushka", YOB:1988, Husband:"Virat"},
    {name:"Katrina", YOB:1983, Husband:"Vicky"}
];

console.log(details);
console.log(typeof(details));
console.log(details[1].Husband);
console.log(details.length);