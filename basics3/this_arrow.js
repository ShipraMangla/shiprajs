const user={
    username:"Shipra",
    name:"Whatsapp",
    Message: function(){
        console.log(`${this.username} welcome to ${this.name}`);
        console.log(this);
    }
    //THIS IS USED TO REFER TO CURRENT CONTEXT MATLAB JIS CONTEXT ME ABHI HUM HAI FOR EXAMPLE IN THIS CASE USER OBJECT ME TOO THIS USKI VALUES KO REFER KAR RAHA HOGA
}
// user.Message()
// user.username="Mangla"
// user.Message()
//console.log(this)
//this is node environment isliye iska output aayega empty object 
//******but in browser window is the global object isliye vha output windows hi aayega */

function one(){
    const username="dhsds"
    console.log(this.username); //"UNDEFINED" output, it works in objects and not infunction in this way
}
//one()

const two=function(){
    const username="dhsds"
    console.log(this.username);
}
//two()
const three=()=>{
    
    console.log(this);
}
//three()

// const add=(num1,num2)=>{
//     return num1+num2  //explicit return
// }
// const add=(num1,num2)=>  num1+num2  //implicit return
const add=(num1,num2)=> (num1+num2) 
console.log(add(5,8));

const hi=()=>({username:"shipra"})
console.log(hi());
