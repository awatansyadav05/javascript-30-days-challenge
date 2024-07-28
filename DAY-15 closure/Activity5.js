//Memorization
// Function to create a memoized version of another function
function memoize(fn) {
  // Object to store the results of previous computations
  const cache = {};

  // Return a function that uses the cache to avoid redundant computations
  return function(...args) {
    // Create a unique key for the arguments to use as a cache key
    const key = JSON.stringify(args);

    // Check if the result for the given arguments is already in the cache
    if (cache[key] !== undefined) {
      console.log(`Fetching from cache for arguments: ${key}`);
      return cache[key];
    }

    // Compute the result and store it in the cache
    console.log(`Computing result for arguments: ${key}`);
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

// Example function to demonstrate memoization
function slowFunction(num) {
  // Simulate a slow computation
  let result = 0;
  for (let i = 1; i <= num; i++) {
    result += i;
  }
  return result;
}

// Create a memoized version of the slow function
const memoizedSlowFunction = memoize(slowFunction);

// Call the memoized function with different arguments
console.log(memoizedSlowFunction(5));  // Computes and stores result
console.log(memoizedSlowFunction(5));  // Fetches result from cache
console.log(memoizedSlowFunction(10)); // Computes and stores result
console.log(memoizedSlowFunction(10)); // Fetches result from cache

// Memoize function to store results of previous computations
function memoize(fn) {
  const cache = {}; // Cache object

  return function(...args) {
    const key = JSON.stringify(args); // Unique cache key based on arguments

    if (cache[key] !== undefined) {
      console.log(`Fetching from cache for arguments: ${key}`);
      return cache[key]; // Return cached result
    }

    console.log(`Computing result for arguments: ${key}`);
    const result = fn(...args); // Compute result if not cached
    cache[key] = result; // Store result in cache
    return result;
  };
}

// Function to calculate factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) return 1; // Base case
  return n * factorial(n - 1); // Recursive case
}

// Create a memoized version of the factorial function
const memoizedFactorial = memoize(factorial);

// Call the memoized factorial function with different arguments
console.log(memoizedFactorial(5));  // Computes and stores result: 120
console.log(memoizedFactorial(5));  // Fetches result from cache: 120
console.log(memoizedFactorial(10)); // Computes and stores result: 3628800
console.log(memoizedFactorial(10)); // Fetches result from cache: 3628800
