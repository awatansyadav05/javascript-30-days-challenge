//DAY8 ES6+ Features
//Activity 1: Template Literals
//Task 1'
const user = { name: "Ajohn", age: 19 }
console.log(`User name is ${user.name} and his age is ${user.age}`);

//task 2;
const message = `This is a 
multiline string
in javascript`;
console.log(message);

//Activity 2: Destructing
//task 3;
const number = [10, 20, 30, 40, 50];
const [firstElement, secondElement] = number
console.log(firstElement);
console.log(secondElement);

//task 4;
const book = {
  title: "Ikgai",
  author: "Héctor García"

}
const { title, author } = book
console.log(title);
console.log(author);

//Activity 3: Spread and Rest operator
//task 5;
const originalArray = [1, 2, 3];
const additionalArray = [4, 5, 6];
const newArray = [...originalArray, ...additionalArray];
console.log(newArray);

//task 6
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0)
}
console.log(sum(6, 7));
console.log(sum(6, 7, 29));
console.log(sum(1, 2, 3, 4));

//Activity 4: Default Parameter
//task 7;
function product(a, b = 1) {

  return a * b;
}
console.log(product(7));


//Activity 4: Enhanced operator literals 
//task 8;
const name = "Book";
const price = 10;

const product1 = {
  name,   // Using shorthand property names
  price,  // Using shorthand property names
  discount: 0.1,  // Regular property

  // Method using shorthand syntax
  calculateDiscountedPrice() {
    return this.price * (1 - this.discount);
  },

  // Computed property name
  ['discounted' + 'Price']() {
    return this.price * (1 - this.discount);
  }
};

console.log(product1.name);
console.log(product1.price);
console.log(product1.calculateDiscountedPrice());
console.log(product1['discountedPrice']());

//task 9
const key1 = "firstname";
const key2 = "lastname"
const person = {
  [key1]: 'John',
  [key2]: 'Doe'
}
console.log(person.firstname);
console.log(person.lastname);
