const lang=["java","js","cpp","react"]

const value=lang.forEach((item)=>{
  console.log(item);
  return item;
})
console.log(value);//undefined
//for each loop doe not return a value we use "filter" for that
//what filter does is that it returns the value which satisfies a certaincondition
const numbers=[1,2,3,4,5,6,7,8,9,10]
const value1=numbers.filter((nums)=>nums>5)//returns all the values from the array which are greater than 5 //THis is implicit return
console.log(value1);

//However when we use scope in the array function, we need to explicitly mention the return keyword

const value2=numbers.filter((nums)=>{
     return nums>5
})
console.log(value2);

//We can use do this y for each loop

const Mynums=[];
numbers.forEach((num)=>{
  if (num>5) {
    Mynums.push(num)
  }
})
console.log(Mynums);


const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userbk=books.filter((bk)=>bk.genre==='Fiction')
userbk=books.filter((bk)=>{
  return bk.publish>=2000 && bk.genre==='Science'
})
console.log(userbk);