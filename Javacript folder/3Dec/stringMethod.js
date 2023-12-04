s1= "I was born and brought up in Nagpur and Nagpur made me graduate and my husband is also from Nagpur"
console.log("Slicing from 4 to 16: ", s1.slice(4,16)); //s born and b
console.log("Substring 4 to 16: ",s1.substring(4,16)); //s born and b
//slice and substring operate similarly 

//Difference bertween slice & substring
//he substring() method extracts characters, between two indices (positions), from a string, and returns the substring.

//The substring() method extracts characters from start to end (exclusive).

//The substring() method does not change the original string.

//If start is greater than end, arguments are swapped: (4, 1) = (1, 4).

//Start or end values less than 0, are treated as 0.

console.log("Slicing from -3 to 16: ", s1.slice(-3,16)); // no output
console.log("Substring -3 to 16: ",s1.substring(-3,16)); //I was born and b
console.log("Substring 25 to 8: ",s1.substring(27,8)); //rn and brought up i
console.log("Substring -10 to -2: ", s1.substring(-10,-2)); //no output
console.log("Slice -10 to -2: ", s1.slice(-10,-2)); //rom Nagp
console.log("Substring from 4 to 6 :", s1.substring(4,7)); //s b

//The substr() method extracts a part of a string.

//The substr() method begins at a specified position, and returns a specified number of characters.

//The substr() method does not change the original string.

//To extract characters from the end of the string, use a negative start position.

console.log("Substr 4,12 : ", s1.substr(4,12)); //s born and b
console.log("Substr -3,6 : ", s1.substr(-13,6)); //o from

//replace() method searches a string for a value or a regular expression.

//The replace() method returns a new string with the value(s) replaced.

//The replace() method does not change the original string.

//If you replace a value, only the first instance will be replaced. 
//To replace all instances, use a regular expression with the g modifier set.


s2= "My favourite dish is Noodles. I eat noodles with manchurian and noodles with momos sometimes"
console.log(s2.replace("noodles", "maggi")); //My favourite dish is Noodles. I eat maggi with manchurian and noodles with momos sometimes
//If 2nd argument maggi is not given then 1st occurrence of noodles will be replaced by undefined

//if u want to replace all noodles by maggi then use reg x

console.log(s2.replace(/noodles/g, "maggi")); //My favourite dish is Noodles. I eat maggi with manchurian and maggi with momos sometimes
//It is case sensitive. If u keep Noodles, it will not bet replaced by maggi

console.log(s2.replace(/noodles/ig, "maggi")); //My favourite dish is maggi. I eat maggi with manchurian and maggi with momos sometimes
//ig i means insensitive. g means global

//g replaces all words
//i replaces case sensitive words also

//i alone cannot be used //ig should be used together

//The replaceAll() method searches a string for a value or a regular expression.

//The replaceAll() method returns a new string with all values replaced.

//The replaceAll() method does not change the original string.

//The replaceAll() method was introduced in JavaScript 2021.

//The replaceAll() method does not work in Internet Explorer.

//If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown


s3= "Sunday is the first day of week and sunday is a holiday, Eat eggs on sunday";
console.log(s3.replaceAll("sunday","Friday")); //Sunday is the first day of week and Friday is a holiday, Eat eggs on Friday
console.log(s3.replaceAll(/sunday/ig,"friday")); //friday is the first day of week and friday is a holiday, Eat eggs on friday

//The toUpperCase() method converts a string to uppercase letters.

//The toLowerCase() Method converts a string to lowecase letters.

s4= "My Name is shreya"
console.log("Upper case :", s4.toUpperCase()); //MY NAME IS SHREYA
console.log("Lower case :", s4.toLowerCase()); //my name is shreya


