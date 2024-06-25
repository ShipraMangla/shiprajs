const nums=[1,2,3,4]

const total=nums.reduce(function(accumulator,currentval){
    console.log(`accumulator: ${accumulator} and current value: ${currentval}`);
    return accumulator*currentval
},1)
//console.log(total);
//BY USING ARROW FUNCTION

//const total=nums.reduce((acc,currentval)=>acc+currentval,1)

const shopping=[
    {
        course:"JAVA",
        price:1000
    },
    {
        course:"JS",
        price:2000
    },
    {
        course:"PYTHON",
        price:1200
    },{
        course:"RUBY",
        price:999
    },
]
const pricetotal=shopping.reduce((acc,item)=>acc+item.price,0)
console.log(pricetotal);