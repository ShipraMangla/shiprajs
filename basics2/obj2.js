const Appleuser= new Object()//Singleton Object
// console.log(Appleuser)
const Appleuser2={}//normal object
// console.log(Appleuser2)
Appleuser.name="Shipra"
Appleuser.age=23
Appleuser.isLoggedin=true
// console.log(Appleuser)
const Auser={
    name:{
        username:{
            firstname:"Ships",
            lastname:"Mangla"
        },
        normalname:{
            firstname:"Sh",
            lastname:"Man"
        }
    }
}
//console.log(Auser.name.username.firstname)
const obj1={
    1:"S",
    2:"H"
}
const obj2={
    3:"I",
    4:"P"
}
//console.log({obj1,obj2});
//const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1, ...obj2}
//console.log(obj3);

const Users=[
    {
        id:3,
        name:"Shipra"
    },
    {
        id:4,
        name:"Arya"
    },
    {
        id:5,
        name:"Gurleen"
    }

]
//console.log(Users[1].name);
console.log(Appleuser);
console.log(Object.keys(Appleuser));
console.log(Object.values(Appleuser));
console.log(Object.entries(Appleuser));
console.log(Appleuser.hasOwnProperty("isLoggedin"));
