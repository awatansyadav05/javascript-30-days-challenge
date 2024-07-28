// Tasks/Activities:
// Activity 1: Class Definition
class Person{
  constructor(name,age){
    this.name= "avii";
    this.age=21;
  } 


greet() {
  console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
}
updateAge(newAge) {
  this.age = newAge;
  console.log(`Age updated to: ${this.age}`);
}
}



const Student = new Person('Avii',21);
Student.updateAge(23)
Student.greet() 