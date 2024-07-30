//Activity 3: Queue
//task 5
class Queue {
  constructor() {
    this.items = [];
  }

  // Add an element to the end of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Remove and return the first element from the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  // View the first element in the queue without removing it
  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the number of elements in the queue
  size() {
    return this.items.length;
  }

  // Clear all elements from the queue
  clear() {
    this.items = [];
  }
}

//task 6
class PrintJob {
  constructor(name, pages) {
    this.name = name;
    this.pages = pages;
  }

  print() {
    console.log(`Printing ${this.pages} pages from ${this.name}`);
  }
}

// Simulate the printer queue
const printerQueue = new Queue();

// Adding print jobs to the queue
printerQueue.enqueue(new PrintJob("Document1", 10));
printerQueue.enqueue(new PrintJob("Document2", 5));
printerQueue.enqueue(new PrintJob("Document3", 7));

// Processing the print jobs
while (!printerQueue.isEmpty()) {
  const job = printerQueue.dequeue();
  job.print();
}

console.log("All print jobs are done!");
