//Activity 2: Class Inheritance 
class Person {
  constructor (name, age){
    this.name= name;
    this.age=age;
  }
  greet(){
    return `Hello, my name is ${this.name} and ${this.age} years old`
  }
}
class Student extends Person{
  constructor(name,age,studentId){
    super(name,age);
    this.studentId= studentId;
  }
  //overriding method
  greet(){
    return `${super.greet()} and My student ID is ${this.studentId}`
  }

  getStudentId(){
    return `Student ID: ${this.studentId}`
  }
}

const student1= new Student ('nishuu', 23, '21btcse0324')

// console.log(student1.greet());
// console.log(student1.getStudentId());
console.log(student1.greet());