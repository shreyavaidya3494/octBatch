//Spread Operator
//The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

let numbers=[81,82,53,74,15,46,78,99,33,22,11,76];
let n=[...numbers];
console.log("numbers : ",numbers);
console.log("n :",n);

/*numbers :  Array(6)0: 811: 822: 533: 744: 155: 46length: 6[[Prototype]]: Array(0)
spread_operator.js:7 n : Array(6)0: 811: 822: 533: 744: 155: 46length: 6[[Prototype]]: Array(0)*/

let [n1,n2,n3,...n4]=numbers;
//let [n1,...n2,n3]=numbers this will not work
console.log("n1 : ",n1);
console.log("n2 : ",n2);
console.log("n3 : ",n3);
console.log("n4 : ",n4);
/*
  n1 :  81
  n2 :  82
  n3 :  53
  n4 :  (9) [74, 15, 46, 78, 99, 33, 22, 11, 76]
  */

  let a=["shreya",9.7,9.1,"3"];
  let b=[8,77,81,43,54,65,98.1,"7"];
  let c=[...b, ...a];
  console.log("c:" );
  //(12) [8, 77, 81, 43, 54, 65, 98.1, '7', 'shreya', 9.7, 9.1, '3']


  //Generally, we don't use object with spead operator because it leads to data loss in case of same keys

  let child= {name:"raha", age:1, place:"mumbai", papa:"ranbir"};
  let parent={name:"alia",profession:"actress",looks:"average",age:30};
  let person={...child, ...parent};
  console.log(person);
  //{name: 'alia', age: 30, place: 'mumbai', profession: 'actress', looks: 'average',papa:'ranbir'}
  //in this case, in case of repeated keys, latest ones will be preferred and unique ones will be displayed all

  let ful={flower:"rose", color:"red", qty:3};
  let fool={flower:"marigold", color:"orange", qty:8};
  let foool={...fool, ...ful};
  console.log("foool :", foool);
  //{flower: 'rose', color: 'red', qty: 3} //latest one ful will be displayed



  

