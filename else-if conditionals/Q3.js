function evaluateTemperature(temperature){
    if(temperature > 30){
        console.log("Its a Hot Day");
    }
    else if(temperature>=20 && temperature<=30){
        console.log("Weather Is Pleasant")
    }
    else{
        console.log("Its a chilly day");
    }
}
const temperature = 35;
evaluateTemperature(temperature);