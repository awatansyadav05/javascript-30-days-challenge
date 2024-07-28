//Getter and Setter
class Person {
  constructor (firstname, lastname, age){
    this.firstname= firstname;
    this.lastname=lastname;
    this.age=age;
  }
  greet(){
    return `Hello my name is ${this.firstname} ${this.lastname} and I am ${this.age} years old`
  }
  //getter 
  get fullname(){
    return `${this.firstname} ${this.lastname}`
  }
  //setter
  set fullname(name){
    const [firstname,lastname]= name.split( ' ');
    this.firstname= firstname;
    this.lastname=lastname;
  }

}

const person1= new Person('Saurav', 'singh', 30);
console.log(`Intial full name: ${person1.fullname}`);
person1.fullname= "Rina Kumar"
console.log(`updated full name: ${person1.fullname}`);
