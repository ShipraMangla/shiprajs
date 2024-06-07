//for of loop
// for (const iterator of object) { this object does not mean the object datatype here 
// it doesn't mean this loop can be applied to objects only 
//any data that is iterable like arrays, strings can be used    
// }
const arr=[1,2,3,4,5,6]
for (const num of arr) {
    //console.log(num);
}
const greetings="Hello World"
// for (const greet of greetings) {
//     console.log(greet);
//     if(greet==" "){
//         break;
//     }
// }
for (const greet of greetings) {
    //console.log(`OUTER LOOP ${greet}`);
    for (const num of arr) {
      //  console.log(`value at ${greet} is ${num}`);
    }
}
//MAPS like objects it has key valu pairs but it holds only uique values and reatins the order of the key-value pairs

const map=new Map()
map.set("CA","CALIFORNIA")
map.set("IN","INDIANA")
map.set("AZ","ARIZONA")
map.set("VA","VIRGINIA")
//console.log(map);

for (const keys of map) {
    //console.log(keys);
}
for (const [keys,value] of map) {// known as array destructuring
    //console.log(keys, ":-", value);
}
const Myobj={
    name:"Shipra",
    age:22
}
// for (const [key,value] of Myobj) {
//     console.log(key,":-",value);
// }
for (const key of Myobj) {
    console.log(key);
}
//for of loops cannot be applied to iterate objects