let a=
[
{name:"Katrina", Year:1983, Age:40, Husband: "Vicky"},
{name:"Kareena", Year:1980, Age:43, Husband:"Saif"},
{name:"Anushka", Year:1988, Age:35, Husband:"Virat"},
{name:"Deepika", Year:1988, Age:37, Husband:"Ranveer"},
{name:"Alia", Year:1993, Age:30, Husband:"Ranbir"},
{name:"Kiara",Year:1991,Age:32,Husband:"Siddharth"}
];

let val=a.find(ele =>
    {
        return ele.Year==1988;
    })
console.log("val is", val);
//val is {name: 'Anushka', Year: 1988, Age: 35, Husband: 'Virat'}
//not one is returned not deepika




let v=a.find(element=>
    {
        return element.name=="Aishwarya"
    })
console.log("v=",v);
//v= undefined