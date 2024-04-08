let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleTimeString());


//Jan is th 0th month in javascript
//let myCreateddate= new Date(2023,7,12)
// let myCreateddate= new Date(2023,7,12,15,12,10)
//let myCreateddate= new Date("2023-01-15")
let myCreateddate= new Date("01-15-2024")
// console.log(myCreateddate.toLocaleString());
let myTime = Date.now()
// console.log(myTime);
// console.log(myCreateddate.getTime())
// console.log(myCreateddate.getMonth())
// console.log(myCreateddate.getDay());
//console.log(Math.floor(Date.now()/1000));
console.log(myDate.toLocaleString('Default',{
    era:"long"
}
));



