//There are two types of datatypes in javascript :- PRIMITVE AND NON-PRIMITVE
//Datatypes are divided based on how they are stored in memory and how we can access those variables
//JS is dynamically typed language as the values that the variables hold are determined at the runtime and we do not need to spcify the type explicitly
//PRIMITVE:- These are basically call by value datatypes
//7 types:- Number, String, Boolean. null, undefined, symbol, bigInt
let score=30
let ScoreV=30.45
let name="Shipra"
let islogged = false
let temp=null;
let state;
let BigNumber=475487548546543n
console.log([score, ScoreV, name, islogged, temp, state])
let Value=Symbol("123")
let Valuem=Symbol("123")
// console.log(Value===Valuem)
// console.log(Value)
// console.log(Valuem)

//Non-Primitive-- Call by reference
//Arrays, Objects, Functions
//The datatype of all non primtive types are objects. However the datatype of function is returned as object function
let heroes=["Wonder Woman", "Black Panther", "Captain America", "Loki"]
console.log(heroes)
let myObj1={
    name: "Shipra",
    Age: 22,
    Title: "Engineer",
}
console.log(myObj1)

let myfunc = function(){
    console.log("Hello World")
}
// console.log(myfunc)
// console.log(typeof(BigNumber))
// console.log(typeof(heroes))
// console.log(typeof(myfunc))
//***********MEMORY****************** */
//STACK (Primitive datatypes): when memory is allocated in stack, call by value occurs which means that you get a copy of the value and not the original value. So if we change anything, only the copy gets updated, the original value remains the sam
//HEAP (Non primitive datatypes) When memory is allocated in heap, call by reference occurs which means the original value is referenced to the variable. So if we change the value the original value gets updated.
let numberone=240;
let numbertwo=numberone
numbertwo=100;
console.log(numbertwo)
console.log(numberone);

let userone={
    username:"Shipra",
    useremail:"shipra@gmail.com"
}
let usertwo=userone;
usertwo.username="Hitesh"
console.log(userone);
console.log(usertwo);

let nameone= function(){
    namep="ShipraMangla"
}
let nametwo=nameone
nametwo.namep="Mangla Shipra"
console.log(nameone.namep)
console.log(nametwo.namep)