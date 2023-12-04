
function checkTimeOfDay(currentHour){
    if(currentHour>=5 && currentHour <=11.59){
        console.log("Good Morning!")
    }
    else if(currentHour>=12 && currentHour <=16.59){
        console.log("Good Afternoon!")
    }
    else if(currentHour>=17 && currentHour <=20.59){
        console.log("Good Evening!")
    }
    else {
        console.log("Good Night!");
    }
}
const currentHour = new Date().getHours();
checkTimeOfDay(currentHour);