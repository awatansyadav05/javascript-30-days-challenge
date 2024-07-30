class Stack {
  constructor() {
    this.items = [];
  }

  // Add an element to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // Remove and return the top element from the stack
  pop() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return null;
    }
    return this.items.pop();
  }

  // View the top element without removing it
  peek() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return null;
    }
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the number of elements in the stack
  size() {
    return this.items.length;
  }

  // Display all elements in the stack
  display() {
    console.log(this.items.join(', '));
  }
}

// Function to reverse a string using the Stack class
function reverseString(inputString) {
  const stack = new Stack();

  // Push all characters of the input string onto the stack
  for (let char of inputString) {
    stack.push(char);
  }

  // Pop characters from the stack to form the reversed string
  let reversedString = '';
  while (!stack.isEmpty()) {
    reversedString += stack.pop();
  }

  return reversedString;
}

// Example usage:

// Demonstrating stack operations
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.display(); // Output: 10, 20, 30
console.log(stack.peek()); // Output: 30
console.log(stack.pop()); // Output: 30
stack.display(); // Output: 10, 20

// Reversing a string using the stack
const originalString = "hello";
const reversed = reverseString(originalString);
console.log("Original String:", originalString); // Output: hello
console.log("Reversed String:", reversed);       // Output: olleh
