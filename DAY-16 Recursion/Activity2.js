//task 3
function sumArray(arr){
if(arr.length===0){
  return 0;
}
return arr[0]+sumArray(arr.slice(1));
}

const testCase1=[1,2,3,4,5];
const testCase2=[10,20,30];
const tesCase3=[7,-3,-6];
const testCase4=[];

console.log(`sum of testcase1: ${sumArray(testCase1)}`);
console.log(`sum of testcase2: ${sumArray(testCase2)}`);
console.log(`sum of testcase3: ${sumArray(tesCase3)}`);
console.log(`sum of testcase4: ${sumArray(testCase4)}`);

function findMax(arr){
  if(arr.length==1){
    return arr[0]
  }
  const max=findMax(arr.slice(1))
  return arr[0] > max ?   arr[0]:max;
}
const TestCase1=[1,256,564,34];
const TestCase2=[34,67,45,32];
const TestCase3=[45,43,2,0];
const TestCase4=[-2,-5,-9];

console.log(`Max of testCase1:${findMax(TestCase1)}`);
console.log(`Max of testCase2:${findMax(TestCase2)}`);
console.log(`Max of testCase3:${findMax(TestCase3)}`);
console.log(`Max of testCase4:${findMax(TestCase4)}`);