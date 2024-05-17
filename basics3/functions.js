// function sayname(){
//     console.log("S");
//     console.log("h");
//     console.log("i");
//     console.log("p");
//     console.log("r");
//     console.log("a");
// }
// sayname //refernce to the function
// sayname()  //execution of the function

// function add(number1,number2){
//     const result=number1+number2;
//     console.log("adition");
//     return result;
// }
// const res = add(5,7);
// console.log(res);

function loggedin(username="Ships"){
    if(!username){ //if(username===undefined)
        console.log("Enter a name");
        return
    }
   return `${username} logged in`
}
//console.log( loggedin("Shipra"))
// console.log(loggedin("Shipra"));

function Calculate(val1,val2,...num1){
    return num1
}
console.log(Calculate(300,400,100,500,3000));

const user ={
    username:"Shipra",
    Desig:"ASE"
}
 function user1(obj){
    console.log(`Hi my name is ${obj.username} and my designation is ${obj.Desig}`);
 }
// user1(user);
// user1({
//     username:"Hitesh",
//     Desig:"ACE"
// })

const newarr=[100,300,200,400]
function getarr(arr1){
    return arr1[3]
}
//console.log(getarr(newarr));
console.log(getarr([92328,34343,382937,343254]));


