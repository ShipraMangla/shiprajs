//if
// if(2=='2'){
//     console.log("is equal");
// }
// if(2==="2"){
//     console.log("is equal");
// }
// const temperature =40
// if(temperature<50){
//  console.log("less than 50");
// }
// else{
//     console.log("temperature is greater than 50");
// }
//< > <= >= != == !== ===
const score=100
if(score==100){
    const power="invisible"
    console.log(`power is ${power}`);
}
//console.log(`power is ${power}`);it will produce error as power is not defined which is good. and the error should be there because the scope of power is block cope (if only). if we use "var" here it will produce no error and powwer is accessible outside its scope ehich is not at all good



//if(score==100) console.log("score=100"),console.log("score is fine");;
//implicit scope ....we must use semi colon while working with implicit scope
//not a good practice


let balance=2000
if(balance<1000){
    console.log("less than 1000");
}
else if(balance<500){
    console.log("less than 500");
}
else if(balance<100){
    console.log("less than 100");
}else{
    console.log("balance is 2000");
}
const userloggedin=true
const debitacrd=true
const loginviagoogle=true
const loginviaemail=false
if(userloggedin &&debitacrd){
    console.log("Allow to shop");
}
if(loginviaemail || loginviagoogle){
    console.log("allow to log in");
}