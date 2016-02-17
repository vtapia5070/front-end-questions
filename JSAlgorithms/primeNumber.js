// 1. Verify a prime number.

var isPrime = function (num) {
  for(var i = 2; i < num; i++) {
    if(num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

console.log(isPrime(11)); // true
console.log(isPrime(12)); // false
console.log(isPrime(2)); // true
console.log(isPrime(1)); // false
