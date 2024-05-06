//There are two types in whcih objects can be declared 
//literals and constructors
//when objects are declared as constructor method it is singleton object which is only one of its own ------object.create()
const mySymbol=Symbol("key1")
const myUser={
    name:"Shipra",
    "last name":"Mangla",//name here is treated as a string behind the scene
    age:23,
    email:"Shipra@gmail.com",
    isLoggedin:true,
    loggedDays:["Monday","Wednesday"],
    [mySymbol]:"key2"
}
// console.log(myUser.email);
// console.log(myUser["email"]);
// console.log(myUser["last name"]);
// console.log(myUser.loggedDays[0]);
// console.log(myUser[mySymbol]);
// console.log(typeof myUser[mySymbol]);
// Object.freeze(myUser)
// myUser.name="Arya"
// console.log(myUser);
myUser.greeting=function(){
    console.log("Hello")
}
console.log(myUser.greeting());
myUser.greeting2=function(){
    console.log(`Hello ${this.name}`);
}
console.log(myUser.greeting2())
