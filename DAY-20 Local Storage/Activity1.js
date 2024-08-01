// Day 20: LocalStorage and SessionStorage
// Tasks/Activities:
// Activity 1: Understanding LocalStorage
//task 1
localStorage.setItem('myDetails', 'Hie, This is avii');
const retrivedString = localStorage.getItem('myDetails')
console.log(retrivedString);

//task 2
const myobj= {
  name:'Nishant',
  age: 30,
  role: 'Full stack dev'
}
localStorage.setItem('myobj', JSON.stringify(myobj))
const RetrivedString = localStorage.getItem('myobj')
const Retrivedobj = JSON.parse(retrivedString);
console.log(Retrivedobj);