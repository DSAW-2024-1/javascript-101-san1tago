// Sum of Two Numbers
function sum(a, b) {
  if(typeof a !=="number" || typeof b !=="number"){
      console.log("Los datos de entrada no son adecuados");
  }
  else{
  return a + b;
}
}

// Factorial of a Number
function factorial(n) {
  if(typeof n !=="number"){
    console.log("Los datos de entrada no son adecuados");
}
  else{
    if(n === 0||n===1){
      return 1;
    }
    else if(n<0){
      console.log("No se puede calcular factorial de negativos")
    }
    else{
      let resultado = 1;
      for(let i = 2; i<= n; i++){
        resultado *= i;
      }
      return resultado;
    }
  }
}

// Find the Largest Number
function findLargest(arr) {
  if(!arr.every(a => typeof a === "number")){
    return "Los datos de entrada no son adecuados";
  }
  else{
    let largestNumber = Math.max(...arr);
    return largestNumber;
  }
}

// Count Vowels in a String
function countVowels(str) {
  // Add your code here
}

// Check if a Number is Prime
function isPrime(n) {
  // Add your code here
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
