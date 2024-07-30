//Array Alogorithm
function rotateArray(arr, k) {
  const n = arr.length
  k = k % n;
  if (k < 0) k += n;
  const rotatedArray = arr.slice(-k).concat(arr.slice(0, -k))
  console.log("Rotated array", rotatedArray);
  return rotatedArray
}
const ArrayTorotate = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
rotateArray(ArrayTorotate, k)


//task 9
function mergeSortedArrays(arr1, arr2) {
  let i = 0, j = 0;
  const mergedArray = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  // If there are remaining elements in arr1
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  // If there are remaining elements in arr2
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  console.log("Merged Array:", mergedArray);
  return mergedArray;
}

// Example usage
const sortedArray1 = [1, 3, 5, 7];
const sortedArray2 = [2, 4, 6, 8];
mergeSortedArrays(sortedArray1, sortedArray2);
