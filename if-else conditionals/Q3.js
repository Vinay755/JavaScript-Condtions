function checkPasswordStrength(password){
    if(password <= 8){
        console.log("Weak Password");
    }
    // else if(password==letters && password==number && password>=8){
    //     console.log("Strong Password")
    // }
    else{
        console.log("Moderate Password");
    }
}
return checkPasswordStrength("Vinay123");