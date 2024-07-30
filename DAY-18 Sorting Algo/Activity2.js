//Searching algo
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      console.log(`Linear search: Target ${target} found at index ${i}`);
      return i;
    }

  }
  console.log(`Target not found ${target}`);
  return -1;
}

const arr1 = [56, 45, 34, 23, 21, 10, 12];
const target1 = 56;
linearSearch(arr1, target1)

//Binary Serach
function BinarySerach(arr2, k) {
  let left = 0;
  let right = arr2.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (arr2[mid] === k) {
      console.log(`Binary Search: Target ${k} found at index ${mid}`);
      return mid;
    }
    else if (arr2[mid] < k) {
      left = mid + 1;
    }
    else {
      right = mid - 1;
    }
  }

  console.log(`Binary Search : Target ${k} not found`);
  return -1;
}
const sortedArr = [10, 20, 30, 40, 50, 60, 70];
const k1 = 40;
BinarySerach(sortedArr, k1);