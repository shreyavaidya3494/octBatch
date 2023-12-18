//for of

let girls=["katrina","deepika","alia","kareena","kiara","sara","ananya","rashmika"];
let new_girls=["tara"];
for(let g of girls)
{
    if(g!="kareena" && g!="katrina")
    {
    new_girls.push(g);
    }
}
console.log("New girls are: ",new_girls);

/*New girls are:  
(7) ['tara', 'deepika', 'alia', 'kiara', 'sara', 'ananya', 'rashmika']
*/


//for in
 let students={name:"Svanik", Age:2, City:"Hyderbad",Phone:68765675764};
 for (let s in students)
 {
    console.log("keys are :",s )
    console.log("values are :", students[s]);
 }
 /*
 keys are : name
values are : Svanik
 keys are : Age
values are : 2
keys are : City
values are : Hyderbad
keys are : Phone
values are : 68765675764
*/


