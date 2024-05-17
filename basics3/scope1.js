//browser ka jo global scope and code environment ka jo global scope hai dono kaafi alg h
var c=500
let a =100
if(true){
    let a =20;
    const b=40
     c=50
     console.log("in if ",a);
}
console.log(a);
//console.log(b);
//console.log(c);