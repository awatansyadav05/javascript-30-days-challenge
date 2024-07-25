const { add, subtract, multiply, divide } = require('./Task3');

function main() {
  const a = 10;
  const b = 5;

  console.log(`Addition: ${add(a, b)}`);       // Outputs: Addition: 15
  console.log(`Subtraction: ${subtract(a, b)}`); // Outputs: Subtraction: 5
  console.log(`Multiplication: ${multiply(a, b)}`); // Outputs: Multiplication: 50
  console.log(`Division: ${divide(a, b)}`);     // Outputs: Division: 2
}

main()