function isPalindrome(x) {

  if (x < 0) {
    return false;
  }

  const str = x.toString();

  return str === str.split('').reverse().join('');
}


const testCases = [121, -121, 10, 12321, 0, 1001, -101];

testCases.forEach((num) => {
  const result = isPalindrome(num);
  console.log(`Is ${num} a palindrome? ${result}`);
});