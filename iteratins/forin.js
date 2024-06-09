const myObj={
    js:"OBJECT BASED",
    java:"OBJECT ORIENTED",
    C: "PROCEDURAL ORIENTED"
}
for (const key in myObj) {
    //console.log(key);
}
for (const key in myObj) {
   // console.log(myObj[key]);
}
// for (const key in object) {
//    // console.log(`${key} is ${myObj[key]} language`);
// }
const lang=['js','ruby','cpp','java']
for (const key in lang) {
   //console.log(key);
  // console.log(lang[key]);
}
//the biggest difference between for of and forin loop is that for of loop directly prints the values of the array
//however forin loop returns the keys(indexes) in case of array
const map=new Map()
map.set("CA","CALIFORNIA")
map.set("IN","INDIANA")
map.set("AZ","ARIZONA")
map.set("VA","VIRGINIA") 
// for (const key in map) {   MAPS ARE NOT ITERABLE THIS WAY
//     console.log(key);
// }