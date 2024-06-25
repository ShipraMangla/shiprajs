const numbers=[1,2,3,4,5,6,7,8,9]
//const mynum=numbers.map((num)=>num+10)
//console.log(mynum);  /*MAPS WILL TRAVERSE EVERY ELEMENT ON THE ARRAY UNLIKE FILTER WHICH HAS SOME CONDITION TO IT*/

// const Mynums=[]
// numbers.forEach((num)=>{
//     Mynums.push(num+10)
// })
//console.log(Mynums);


//CHAINING
const Mynums=numbers
                    .map((num)=>num*100) //THE OUTPUT OF THIS WILL BE THE INPUT FOR NEXT MAP 
                    .map((num)=>num+2)//THE OUTPUT OF THIS WILL BE THE INPUT FOR NEXT FILTER
                    .filter((num)=>num>300)
console.log(Mynums);