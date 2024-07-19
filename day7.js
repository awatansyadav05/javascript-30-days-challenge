//DAY7 OBJECTS
//Activity 1: Object and Access
//Task 1'
const book = {
  title: "The Alchemist",
  author: "Paulo Coelho",
  year: '1988'
}
console.log(book);

//task 2
console.log(book.title);
console.log(book.author);

//Activity 2: Object Methods
//task 3;
const book1 = {
  title: "The Alchemist",
  author: "Paulo Coelho",
  year: '1988',

  getBookInfo() {
    return `${this.title} by ${this.author}`;
  }
}

console.log(book1.getBookInfo);

///task 4
const book2 = {
  title: "The Alchemist",
  author: "Paulo Coelho",
  year: '1988',

  updateyear(newyear) {
    this.year = newyear;
  }


};
console.log(`${book2.year}`);
book2.updateyear(2020);
console.log(`Updated year ${book2.year}`);

//Activity 3: Nestted Objects
//task 5;
const library = {
  name: "Navyug",
  books: [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925
    },
    {
      title: "1984",
      author: "George Orwell",
      year: 1949
    }
  ]
}
console.log(library);

//task 6;
console.log(library.name);
console.log(library.books[0].title);
console.log(library.books[1].title);
console.log(library.books[2].title);

//Activity 4: This keyword
//task 7
const book3={
  title: "Ikigai: The Japanese Secret to a Long and Happy Life",
  author: "Héctor García",
  year:2016,

  getBookDetails(){
    return `${this.title} and ${this.year}`
  }
}
console.log(book3.getBookDetails());


//Activity 5: Object Iteration
//task 8:
for (let key in book3){
  if(book3.hasOwnProperty(key)){
    console.log(`${key}: ${book3[key]}`);
  }
}

//task 9;
const phone= {
  model:"iphone 14",
  brand:"apple",
  year:2023
};
const keys = Object.keys(phone);
console.log("Keys:");
keys.forEach(key => {
  console.log(key);
});
const values = Object.values(phone);
console.log("\nValues:");
values.forEach(value => {
  // Check if the value is a function and handle it differently
  if (typeof value === 'function') {
    console.log(`${value.name}: [Function]`);
  } else {
    console.log(value);
  }
});