// main.js

const mathUtilities = require('./Task5');

function main() {
  console.log(`Value of PI: ${mathUtilities.PI}`);          // Outputs: Value of PI: 3.14159
  console.log(`Value of E: ${mathUtilities.E}`);            // Outputs: Value of E: 2.71828
  console.log(`Addition: ${mathUtilities.add(5, 3)}`);      // Outputs: Addition: 8
  console.log(`Subtraction: ${mathUtilities.subtract(5, 3)}`); // Outputs: Subtraction: 2
  console.log(`Multiplication: ${mathUtilities.multiply(5, 3)}`); // Outputs: Multiplication: 15
  console.log(`Division: ${mathUtilities.divide(5, 3)}`);     // Outputs: Division: 1.666...
}

main();
