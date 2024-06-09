const lang=["js","ruby","java","cpp","python"]
// lang.forEach(function(item){
//   console.log(item);
// })
//CAN ALSO USE ARRAY FUNCTION
// lang.forEach((item)=>{
//      console.log(item);
// })

// function print(item){
// console.log(item);
// }
// lang.forEach(print) //just pass the funstion reference and don't execute it


//the function has access to other variables also
lang.forEach((item,index,arr)=>{
//console.log(item,index,arr);
})

//OBJECTS IN ARRAYS
const myarray=[
    {
        lang:'javascript',
        file:'js'
    },
    {
        lang:'java',
        file:'java'
    },{
        lang:'python',
        file:'py'
    },{
        lang:'c++',
        file:'cpp'
    }
]
myarray.forEach((item)=>{
    console.log(item.file);
})