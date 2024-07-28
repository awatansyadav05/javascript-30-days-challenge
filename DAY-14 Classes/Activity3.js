// Activity 3: Static Methods and Properties
//task 5
class Person{
  constructor(name ,age){
    this.name=name;
    this.age=age;

  }
  greet(){
    return `Hello My name is ${this.name} and my age is ${this.age}`
  }

  //static mthod to return 
  static greet(){
    return "Hello welcome to our community!"
  }


}

class student extends Person{
  static studentCount =0;
  constructor (name,age,studentId){
    super(name,age);
    this.studentId=studentId;
    student.studentCount++;
  }
  greet(){
    return `${super.greet()} My student ID is ${this.studentId}`
  }
  getStudentID(){
    return `Student ID: ${this.studentId}`
  }
  static getstudentCount(){
    return student.studentCount;
  }
}

const student1= new  student('Saurav',21,'21btcse0202')
const student2= new  student('brajesh',22,'21btcse0312')


console.log(`Total number of students: ${student.getstudentCount()}`);