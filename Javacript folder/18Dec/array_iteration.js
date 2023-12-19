
//foreach

let a=
[
{name:"Katrina", Year:1983, Age:40, Husband: "Vicky"},
{name:"Kareena", Year:1980, Age:43, Husband:"Saif"},
{name:"Anusha", Year:1988, Age:35, Husband:"Virat"},
{name:"Deepika", Year:1986, Age:37, Husband:"Ranveer"},
{name:"Alia", Year:1993, Age:30, Husband:"Ranbir"}
]

//push the name column to new array using for loop

let b=[];
for (let i=0; i<a.length ;i++)
{
    b.push(a[i].name);
}
console.log("New array b is :", b);
//New array b is : (5) ['Katrina', 'Kareena', 'Anusha', 'Deepika', 'Alia']


//JavaScript Array forEach()
//The forEach() method calls a function (a callback function) once for each array element.

let c=
[
{name:"Vicky", Year:1988, Age:35, Wife: "Katrina"},
{name:"Saif", Year:1970, Age:53, Wife:"Kareena"},
{name:"Virat", Year:1988, Age:35, Wife:"Anushka"},
{name:"Ranveer", Year:1985, Age:38, Wife:"Deepika"},
{name:"Ranbir", Year:1982, Age:41, Wife:"Alia"}
]

//push the name column to new array using for loop

let d=[];
c.forEach(element =>
    {
        d.push(element.Year);
    })
console.log("Year of birth of actors is:", d);

//we can also do like this


//JavaScript Array map()
/*The map() method creates a new array by performing a function on each array element.

The map() method does not execute the function for array elements without values.

The map() method does not change the original array.
*/
let n1 = c.map(item =>
    {
       return item.name
    })

console.log("n1 is ",n1);
// n1 is (5) ['Vicky', 'Saif', 'Virat', 'Ranveer', 'Ranbir']


    
//JavaScript Array filter()
//The filter() method creates a new array with array elements that pass a test.

    n2=c.filter(ele =>
    {
     if(ele.Age==35)
     {
     return ele;
     }
    })    

console.log("n2 is ", n2);
//n2 is  
/*(2) [{…}, {…}]
0
: 
{name: 'Vicky', Year: 1988, Age: 35, Wife: 'Katrina'}
1
: 
{name: 'Virat', Year: 1988, Age: 35, Wife: 'Anushka'}
length
: 
2 */