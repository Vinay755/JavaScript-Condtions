function countEvenNumber(numbers){
    let evenCount = 0
    for(let number of numbers){
        if(number%2 == 0){
            evenCount++;
        }
    }
    return evenCount

}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumberCount = countEvenNumber(numbers);
console.log("The number of even numbers in the array is:", evenNumberCount);