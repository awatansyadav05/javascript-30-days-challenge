function reverseInteger(x) {

  const sign = Math.sign(x);


  const reversedNumber = parseInt(Math.abs(x).toString().split('').reverse().join('')) * sign;

  if (reversedNumber < -(2 ** 31) || reversedNumber > (2 ** 31 - 1)) {
    return 0;
  }

  return reversedNumber;
}


const testCases = [123, -123, 120, 0, 1534236469];

testCases.forEach((num) => {
  const result = reverseInteger(num);
  console.log(`Reversed integer for ${num} is: ${result}`);
});