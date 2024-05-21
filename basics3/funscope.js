function one(){
    const username="Shipra"
    function two(){
        const website="Youtube"
        console.log(username);
    }
   // console.log(website);
    two()
    console.log("Hi");
}
//two() not accessible
//one()

if(true){
    const username="Ships"
    if(true){
        const website="Whatsapp"
        console.log(username + website);
    }
    //console.log(website);// produces error accessing outside scope
    console.log(username);
}

console.log(addone(3)); //this is accessible before the decalartion 
function addone(num1){  //normal function definition
  return num1+1;
}

console.log(addtwo(3)); //not accessible before declaration
const addtwo=function(num2){ //this is called as an expression
  return num2+2;
}
