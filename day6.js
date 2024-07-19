//DAY6 Arrays
//Activity 1: Array Creation and access
//task 1;
let arr = [1, 2, 3, 4, 5];
console.log(arr);

//task 2
const arr1 = [1, 2, 3, 4, 5];
const firstElement = arr1[0];
const lastElement = arr1[arr1.length - 1];
console.log(firstElement);
console.log(lastElement);

//Activity 2: Array Methods (Basic)
//task 3;
arr1.push(6)
console.log(arr1);

//task 4;
arr1.pop(lastElement);
console.log(arr1);

//task 5;
arr1.shift(firstElement)
console.log(arr1);

//task 6;
arr1.unshift(1);
console.log(arr1);

//Activity 3: Array Methods (intermediate)
//task 7;
const number = [1, 2, 3, 4, 5];

const doublenumber = number.map(function (num) {
  return num * 2;
})
console.log("The numbers are", number);
console.log("The double number are", doublenumber);

//task 8;
const EvenNumber = number.filter(function (num) {
  return num % 2 == 0;
})
console.log(EvenNumber);

//task 9;
const sum = number.reduce((initialValue, CurrentValue) => initialValue + CurrentValue, 0);
console.log("sum is", sum);

//Activity 4: Array Iteration
//task 10;
for (let i = 0; i < number.length; i++) {
  console.log(number[i]);
}
console.log("TASK 11");

//task 11;
number.forEach(number => console.log(number));

//Activity 5: Multi Dimensinal array
//task 12;
const twoDimensional = [
  [1, 2, 3, 4],
  [5, 6, 7, 8]
];
console.log(twoDimensional);

//task 13;
console.log(twoDimensional[0][3]);