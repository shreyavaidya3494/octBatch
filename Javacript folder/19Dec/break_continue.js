//continue

let a=
[
{name:"Katrina", Year:1983, Age:40, Husband: "Vicky"},
{name:"Kareena", Year:1980, Age:43, Husband:"Saif"},
{name:"Anushka", Year:1988, Age:35, Husband:"Virat"},
{name:"Deepika", Year:1986, Age:37, Husband:"Ranveer"},
{name:"Alia", Year:1993, Age:30, Husband:"Ranbir"},
{name:"Kiara",Year:1991,Age:32,Husband:"Siddharth"}
];


let b=[];

for (i=0 ; i <a.length ; i++)
{
    if(a[i].name=="Deepika")
    {
        continue
    }
    b.push(a[i].Husband);
    b.push(a[i].Year);
}
console.log("b=",b);
//b= (10) ['Vicky', 1983, 'Saif', 1980, 'Virat', 1988, 'Ranbir', 1993, 'Siddharth', 1991]



//break
let c=[];

for (i=0 ; i <a.length ; i++)
{
    if(a[i].name=="Deepika")
    {
        break;
    }
    c.push(a[i].Husband);
    c.push(a[i].Year);
}
console.log("c=",c);
//(6) ['Vicky', 1983, 'Saif', 1980, 'Virat', 1988]