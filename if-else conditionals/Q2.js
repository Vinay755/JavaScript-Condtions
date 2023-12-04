function findLargestNumber(a,b,c){
    let largest =a;
    if ( b > largest){
        largest = largest+b;
    }
    else if( c > largest){
        largest = largest+c;

    }
    return largest;
}
const a = 10;
const b = 20;
const c = 30;

const largestNumber = findLargestNumber(a, b, c);
console.log("The largest number among", a, ",", b, ", and", c, "is:", largestNumber);