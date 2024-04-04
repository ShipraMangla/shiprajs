const name="shipra"
const age=20;
console.log(name+age+" that's it")
console.log(`hello my name is ${name.toUpperCase()} and my age is ${age}`)
const name1=new String("SHIPRA             MANGLA")
// console.log(name1[2]);
// console.log(name1.__proto__);
// console.log(name1.length)
// console.log(name1.substring(0,9))
// console.log(name1.italics())
// console.log(name1.endsWith("A"));
// console.log(name1.charCodeAt(2));
// console.log(name1.indexOf("R"));
// console.log(name1.includes("A"));
// console.log(name1.lastIndexOf("A"));
// console.log(name1.anchor());

// const newString = name1.substr(-8,3)
// console.log(newString);
// const newString1 = name1.substring(5,-3)
// console.log(newString1);
//SUBSTRING HAS PARAMETERS START AND END,,,, NEGATIVE START WILL BE CONSIDERED AS ZERO
//IF END IS LESS THAN START, IT WILL SWAP THE PARAMETERS
//SUBSTR HAS PARAMETERS START AND LENGTH....NEGATIVE START MEANS WILL START FROM THE END
//IF LENGTH IS GIVEN AS NEGATIVE IT WILL CONSIDER IT AS 0;
const String1 = name1.slice(19)
console.log(String1);
const String2= name1.slice(-8,12)
console.log(String2);
//if end<start empty string is returned
const String3 ="         Shipra            Mangla"
console.log(String3.trim());
console.log(String3.replace("S","L"));
const url="https:??ShipraMangla"
console.log(url.replace("??","//"));
console.log(name1.split(" "))
console.log(name1.isWellFormed())
console.log(name1.toLowerCase())