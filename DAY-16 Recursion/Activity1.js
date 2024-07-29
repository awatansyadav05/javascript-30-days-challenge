// Day 16: Recursion
// Tasks/Activities:
// Activity 1: Basic Recursion
//task 1
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5));
console.log(factorial(7));


//task 2 
function fibonacii(n) {
  if (n <= 1) {
    return 1;
  }
  return fibonacii(n - 1) + fibonacii(n - 2)
}
console.log(fibonacii(0));
console.log(fibonacii(1));
console.log(fibonacii(2));
console.log(fibonacii(5));
console.log(fibonacii(8));