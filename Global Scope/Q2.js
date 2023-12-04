globalVar = 4;

function multiplyByGlobal(num){
    const product = num * globalVar;
    return product;
}
const result = multiplyByGlobal(4);
console.log("The product of number and global variable",result)
