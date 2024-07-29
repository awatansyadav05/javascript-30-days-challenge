// String Manipulation with Recursion
//task 5
function reverseString(str){
  if(str===""){
    return "";
  }
  return str.charAt(str.length-1) + reverseString(str.substring(0, str.length-1));
}
const TestCase1= "hello";
const TestCase2="World";
const TestCase3= "Js";
const TestCase4="";

console.log(`Reverse of "${TestCase1}" is ${reverseString(TestCase1)}`);
console.log(`Reverse of "${TestCase2}" is ${reverseString(TestCase2)}`);
console.log(`Reverse of "${TestCase3}" is ${reverseString(TestCase3)}`);
console.log(`Reverse of "${TestCase4}" is ${reverseString(TestCase4)}`);

{/*TASK 6*/ }
function Palidrome(str){
  if(str.length<=1){
    return true;
  }
  if(str.charAt(0)!== str.charAt(str.length-1)){
    return false;
  }
  return Palidrome(str.substring(1,str.length-1))
}

const case1="nitin";
const case2="madam";
const case3="racecar";
const case4="abc";

console.log(`"${case1}" is  ${Palidrome(case1)}`);
console.log(`${Palidrome(case2)}`);
console.log(`${Palidrome(case3)}`);
console.log(`${Palidrome(case4)}`);