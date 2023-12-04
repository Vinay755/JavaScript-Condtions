function checkDay(dayAbr){
    switch(dayAbr){
    case "mon":
        console.log("Monday");
        break;
    case "tue":
        console.log("Tuesday");
        break;
    case "wed":
        console.log("Wednesday");
        break;
    case "thu":
        console.log("Thursday");
        break;
    case "fri":
        console.log("Friday");
        break;
    default :"sun"

    }
}
const dayAbr='fri'
checkDay(dayAbr);