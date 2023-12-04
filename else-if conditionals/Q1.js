function checkGrade(score){
    // let score = 0;
    if(score >= 90){
        console.log("A Grade");
    }
    else if(score>=80 && score<=89){
        console.log("B Grade");
    }
    else if(score>=70 && score<=79){
        console.log("C Grade");
    }
    else if(score>=60 && score<=69){
        console.log("D Grade");
    }
    else{
        console.log("F Grade");
    }
}
checkGrade(57);