const addnum= require('./math')
function main(){
  const num1=5;
  const num2=7;
  const res= addnum(num1, num2);
  console.log(`The sum of ${num1} and ${num2} is ${res}  `);
}

main()