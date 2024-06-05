//for
for (let i = 0; i <=10; i++) {
    const element = i;
    if(element==6){
        //console.log("Hi this is six");
    }
    //console.log(element);
    
}
//console.log(element);   not accessible outside scope

//loops within loops

for (let i = 1; i <=10; i++) {
   // console.log(`OUTER LOOP ${i}`);
    for (let j = 1; j <=10; j++) {
       // console.log(`INNER LOOP ${j} INNER LOOP ${i}`);
     //  console.log(`${i} * ${j}=${i*j}`);
    }
    
}
let movies=["Barbie", "Oppenheimer", "marvel","dc"]
//console.log(movies.length)
for (let index = 0; index <=movies.length; index++) {
    const element = movies[index];
    // console.log(element);
}
//IN JS when you use <=array.length we dont get "out of bound exception" but instead get "undefined" for the last value


for (let index = 1; index <=20; index++) {
    if (index==10) {
        //console.log("reached 10");
        break
    }
   // console.log(`VALUE IS ${index}`);
    
}
for (let index = 1; index <=20; index++) {
    if (index==10) {
        //console.log("reached 10");
        continue
    }
    // console.log(`VALUE IS ${index}`);
    // console.log(`${index} printed`)
}
