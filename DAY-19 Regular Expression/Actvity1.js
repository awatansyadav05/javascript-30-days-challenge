// Day 19: Regular Expressions
// Tasks/Activities:
// Activity 1: Basic Regular Expressions
//task 1
const text = "I love Javascript. Javascript is a versatile language."
const matches = text.match(/Javascript/)
console.log(matches);

//task 2
const text1 = "My phone number is 123-456-7890.";
const digitMatches = text.match(/\d/g);
console.log(digitMatches);
