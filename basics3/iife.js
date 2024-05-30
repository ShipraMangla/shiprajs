//immediately invoked function expressions (IIFE)
//iife is used so that global scope se function ki values pollute na ho
(function chai(){
    //named iife
    console.log(`Hi havw chai`);
})();
//()first paranthesis is for function definition
//()last paranthesis is execution call just like chai() when calling the function
//iife does not know where the context ends o we need to explicitly put a ; after iife
(()=>{
    console.log(`have coffee`);
})();
(
    (name)=>{
        console.log(`have chai ${name}`);
    }
)("Shipra");