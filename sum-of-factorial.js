const sumOfFactorial = (n) => {
  if(n <= 0) return 1;
  return fact(n) + sumOfFactorial(n - 1);
}

const fact = (n) => {
  if( n <= 0) return 1;
  return n * fact(n - 1);
}

console.log(sumOfFactorial(0));
console.log(sumOfFactorial(1));
console.log(sumOfFactorial(2));
console.log(sumOfFactorial(3));