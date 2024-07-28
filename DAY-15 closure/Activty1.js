// Day 15: Closures
// Tasks/Activities:
// Activity 1: Understanding Closures

function createCounter(){
  let count=0;
  return function(){
    count++
    return count;
  }
}
const counter =createCounter();
console.log(counter());
console.log(counter());
console.log(counter());

function privateCounter(){
  let count1=0;
  return {
    increment(){
      count1++;
    },
    getcount(){
      return count1;
    }
  }
}
const counter1 = privateCounter();
counter1.increment();
console.log(`current counter value: ${counter1.getcount()}`);
counter1.increment();
console.log(`current counter value: ${counter1.getcount()}`);
counter1.increment();
console.log(`current counter value: ${counter1.getcount()}`);