const person={
  name: 'John Doe',
  age: 30,
  greet(){
    console.log(`my name is ${this.name}`);
  },
  birthday(){
    this.age+=1;
    console.log(`I am now ${this.age} years old`);
  }
}
module.exports=person;