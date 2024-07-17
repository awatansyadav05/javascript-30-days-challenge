
//functions
//Activity 1: Function Decalration
//task 1;
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "even";
  }
  else
    return "odd";
}
console.log(checkEvenOdd(9));
console.log(checkEvenOdd(8));

//task 2
function square(number) {
  return number * number
}
console.log(square(7));

//Activity 2: Function Expression
//task 3;
function MaxNum(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  else {
    return num2;
  }
}
console.log(MaxNum(3, 7));

//task4'
function str(str1, str2) {
  return str1 + str2;
}
console.log(str("Nitesh ", "Yadav"));

//Activity 3: Arrow Function
//task 5;
const sum = (a, b) => a + b;
console.log(sum(4, 8));

//task 6
const ContainsChar = (str, char) => str.includes(char)
console.log(ContainsChar("Hello Advik", "d"));

//Activity  4: Function Parameters and default values
//task 7;
function product(a, b = 6) {
  return a * b;
}

console.log(product(8));

//task 8;
function person(greet,name, age=10 )
{
  console.log(`${greet} my name is ${name} my age is ${age}`);
}
person("Hello", "Advik")

//ACtivity 5: Higher order function
//task 9;
function add(a,b,cb){
  let res= a+b;
  cb(res);
  return ()=> console.log(res);
}
let resFunc= add(2,4,()=>{});
resFunc();

//task 10;

const fun1=(name) =>{
  return `${name} from function 1`
}

const fun2=(result)=>{
  console.log(`${result} from function 2`);
}

const dualFunction =(fun1, fun2, value)=> {
  const result = fun1 (value)
  fun2(result)
}
dualFunction(fun1, fun2,"Aduu")
