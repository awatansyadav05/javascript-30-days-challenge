function isValid(s) {
  // Stack to keep track of opening brackets
  const stack = [];
  // Map to store the matching pairs
  const matchingBrackets = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  // Traverse each character in the string
  for (const char of s) {
    if (char in matchingBrackets) {
      // If the current character is a closing bracket
      const topElement = stack.length === 0 ? '#' : stack.pop();
      if (topElement !== matchingBrackets[char]) {
        return false;
      }
    } else {
      // If the current character is an opening bracket
      stack.push(char);
    }
  }

  // The stack should be empty if the string is valid
  return stack.length === 0;
}

// Test cases
const testCases = [
  "()",
  "()[]{}",
  "(]",
  "([)]",
  "{[]}",
  "",
  "[",
  "]"
];

testCases.forEach((test) => {
  const result = isValid(test);
  console.log(`Is "${test}" valid? ${result}`);
});