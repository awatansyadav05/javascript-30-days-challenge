// Day 18: Algorithms
// Tasks/Activities:
// Activity 1: Sorting Algorithms
//task 1---> Bubble sort
function bubbleSort(arr) {
  let n = arr.length
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  console.log("Bubble sort", arr);
}

const arr1 = [65, 87, 45, 32, 12, 89, 56]
bubbleSort(arr1)

//task 2 ----> Selection sort
function selectionSort(arr2) {
  let n = arr2.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr2[j] < arr2[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr2[i], arr2[minIndex]] = [arr2[minIndex], arr2[i]];
    }
  }
  console.log("Selection Sort", arr2);
}

const Testcase = [56, 78, 90, 54, 32, 12, 10];
selectionSort(Testcase);


//task 3---> QuickSort
function quicksort(arr3) {
  if (arr3.length <= 1) {
    return arr3;
  }
  const pivot = arr3[Math.floor(arr3.length / 2)]
  const left = arr3.filter(x => x < pivot)
  const middle = arr3.filter(x => x === pivot)
  const right = arr3.filter(x => x > pivot)
  return [...quicksort(left), ...middle, ...quicksort(right)]
}

const arr4 = [65, 56, 34, 23, 78, 90,];
const sortarray3 = quicksort(arr4);
console.log("Quick Sort", sortarray3);