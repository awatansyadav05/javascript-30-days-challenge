// Activity 3: Understanding SessionStorage
//task 5
sessionStorage.setItem('myString', 'Heelo this is session Storage');
const retrivedString = sessionStorage.getItem('myString');
console.log(retrivedString);

//task 6
const myObject = {
  name: 'Nishant',
  age: 24,
  role: 'Full stack dev'
}

sessionStorage.setItem('myObject', JSON.stringify(myObject))
const retrivedObjectString = sessionStorage.getItem('myObject')

const retrivedObject = JSON.parse(retrivedObjectString);
console.log(retrivedObject);

