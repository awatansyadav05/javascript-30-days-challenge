//Loops
//activity 1: Foor loop
//task 1
for (let i = 1; i <= 10; i++)
  console.log(i);

//task 2
const num = 5;
for (let i = 1; i <= 10; i++)
  console.log(`${num} * ${i} = ${num * i} `);

//Activity 2: While Loop
//task 3
let i = 1;
let sum = 0;

while (i <= 10) {
  sum += i;
  i++;
}
console.log(`sum is ${sum}`);

//task 4
let j = 10;
while (j >= 1) {
  console.log(j);
  j--;
}

console.log("next activity");
//Activity 2: Do-While Loop
//task 5;
let p = 1;
do {
  console.log(p);
  p++;
}
while (p <= 5)

//task 6;
const number = 5;
let res = 1;
let x = 1;
do {
  res *= x;
  x++;
}
while (x <= number)
console.log(`the factorial ${number} is ${res}`);

//Activity 3: Nested loop
//task 7
const size = 5;
for (let i = 1; i <= size; i++) {
  let row = '';
  for (j = 1; j <= i; j++) {
    row += '*';

  }
  console.log(row);
}

//Activity 5: Loop Control Statements
//task 8;
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

//task 9;
for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
}
