const email='shipra@gmail.com'
if(email){
    console.log("got the mail");
}
else{
    console.log("didn't get the mail");
}//get the mail
const email1=""
if(email1){
    console.log("got the mail");
}
else{
    console.log("didn't get the mail");
}//didn't get the mail
const email2=[]
if(email2){
    console.log("got the mail");
}
else{
    console.log("didn't get the mail");
}// get the mail

//falsy values
//false 0 (BigInt 0n) -0 "" null undefiened NaN

//truthy values
//"0" "false" " " [] {} function(){}
 if(email2.length===0){
    console.log("empty array");
 }
 const obj1={}
 console.log(Object.keys(obj1));//empty array which is a truthy value
 if(Object.keys(obj1).length===0){
    console.log("empty object");
 }
 /*in browser
 false==0    output=true
 false==""   output=true
 0==""   output=true*/
//  Nullish coalescing operator (??):null undefined
// it is used when we are calling data from database and using firebase 
let value;
value=5??10
value=null??15 //usually the second is a function which is retrieving data from database
//it means if we getting a  value from the function, use it or otherwise assign null so that the flow of code does not get disturbed.
value=undefined??20
value=null??14??24
console.log(value);

//ternary operator ? :
//condition?true:false

let price=101
price>=100?console.log("more than 100"):console.log("less than 100");;