function filteroddNumber(number){
    return number.filter(number=>number%2!==0);
}
const numberArray =[1,2,3,4,5,6,7,8,9];
const oddNumber=filteroddNumber(numberArray);
console.log(oddNumber)
