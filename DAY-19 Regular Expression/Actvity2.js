// Activity 2: Character Classes and Quantifiers

//task3
const text = "My name is Saurav Dutt, I live in Australia";
const capital = text.match(/\b[A-Z][a-z]*\b/g)
console.log(capital)

//task 4
const text1 = "I have 2 apples and 10 oranges. My phone number is 123-456-789";
const digitSequence = text1.match(/\d+/g);
console.log(digitSequence);

