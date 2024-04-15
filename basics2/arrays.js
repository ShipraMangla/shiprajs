const myArr=[23,67,87,56,89]
const myArr2= new Array(29,24,61,78)
// console.log(myArr[2]);
// console.log(myArr2[2]);
myArr.push(10)
myArr.push(15)
myArr.pop()
//console.log(myArr);
//myArr.unshift(35)
//myArr.shift()
//console.log(myArr);
// console.log(myArr.includes(87));
// console.log(myArr.indexOf(56));

const newArr= myArr.join()
// console.log(myArr);
// console.log(newArr.substring(1,4));

//slice and splice
//the major differnce in slice the original arrays will remain same but in splice the spliced potion will be removed from the actual array.
console.log("A ", myArr);
const myn1 = myArr.slice(1,4)
console.log(myn1);
console.log("B ", myArr);
const myn2 = myArr.splice(1,4)
console.log(myn2);
console.log("C ", myArr);