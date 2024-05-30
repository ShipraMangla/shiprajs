// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
const month = 4
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    case 5:
        console.log("may");
        break;

    default:
        console.log("no month");
        break;
}
//if iw don't use break it will execute all the code below the correct case except default
// the output would be then april may
//also we can give string values in the case 