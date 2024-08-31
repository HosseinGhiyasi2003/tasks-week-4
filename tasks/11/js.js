let input = Number(prompt('Enter a number:'));  

function isPrime(input) {  
 if(input<=1){
    return false;
 }
 if(input===2){
    return true
 }
 for (i=2;i<input;i++){
    if(input%i===0)
        return false
 }
 return true
}
console.log(isPrime(input))
