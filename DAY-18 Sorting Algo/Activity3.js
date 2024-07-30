//String Algo
//task 6
function countOccurence(str) {
  const count = {};
  for (const char of str) {
    count[char] = (count[char] || 0) + 1
  }
  console.log("character counts", count);
  return count;
}
const example = "Hello World";
countOccurence(example);

//task 7
function longestSubstring(str1) {
  let maxLen = 0;
  let start = 0;
  const maxIndex = new Map();

  for (let end = 0; end < str1.length; end++) {
    const currentChar = str1[end];
    
    if (maxIndex.has(currentChar)) {
      // Move the start position right past the last occurrence of currentChar
      start = Math.max(maxIndex.get(currentChar) + 1, start);
    }
    
    // Update the latest index of currentChar
    maxIndex.set(currentChar, end);
    
    // Update maxLen to the maximum length of the substring found
    maxLen = Math.max(maxLen, end - start + 1);
  }
  
  console.log("Length of longest substring without repeating characters:", maxLen);
  return maxLen;
}

// Example usage
const inputString = "abcabcbb";
longestSubstring(inputString);
