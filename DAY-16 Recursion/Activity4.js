function BinarySearch(arr,target, start=0, end=arr.length-1){
if(start>end){
  return -1;
}
const mid= Math.floor((start+end)/2);

if(arr[mid] ===target ){
  return mid;
}
if(arr[mid]>target){
  return BinarySearch(arr,target,start, mid-1)
}
return BinarySearch(arr,target, mid+1, end)
}

const SortedArray = [1,2,5,7,8,4,15]
const target1= 7;
const target2= 5;
const target3=45;
const target4=15;

console.log(`"${target1} is at ${BinarySearch(SortedArray,target1)}"`);
console.log(`${target2} is at ${BinarySearch(SortedArray,target2)}`);
console.log(`${target3} is at ${BinarySearch(SortedArray, target3)}`);
console.log(`${target4} is at ${BinarySearch(SortedArray,target4)}`);

function CountOccuerence(arr,target){
  if(arr.length===0){
    return 0;
  }
  //check if 1st element is match
  const count =arr[0]===target ? 1:0;
  return count+ CountOccuerence(arr.slice(1),target)
}
const TestCase1=[1,1,1,1,1];
const TestCase2=[2,3,5,3,6];
const TestCase3=[3,2,1,5,6,6];
const TestCase4=[];
console.log(`"${TestCase1}" is ${CountOccuerence(TestCase1,1)}`);
console.log(`"${TestCase2}" is  ${CountOccuerence(TestCase2,3,6)}`);
console.log(`"${TestCase3}" is ${CountOccuerence(TestCase3,6)}`);
console.log(`"${TestCase3}" is ${CountOccuerence(TestCase4,6)}`);
