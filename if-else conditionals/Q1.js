function checkAge(age){
    if(age <= 18){
        console.log("You are a minor");
    }
    else if(age > 18 && age <=64){
        console.log("You are an adult");
    }
    if(age > 64){
        console.log("You are a senior citizen");
    }

}
checkAge(68)