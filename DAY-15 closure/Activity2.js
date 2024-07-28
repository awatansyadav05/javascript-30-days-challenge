//task3 & task4
function createIDgenrator() {
  let lastID = 0;
  return function () {
    lastID++;
    return lastID;

  };
}
const generateID = createIDgenrator();
console.log(`Genrated ID: ${generateID()}`);
console.log(`Genrated ID: ${generateID()}`);
console.log(`Genrated ID: ${generateID()}`);
console.log(`Genrated ID: ${generateID()}`);

//task 4
function createGreeting(name) {
  return function () {
    return `Hello, ${name}!`
  }
}
const greetSaurav = createGreeting('Saurav');
const greetShivani = createGreeting('Shivani');
console.log(greetSaurav());
console.log(greetShivani());

