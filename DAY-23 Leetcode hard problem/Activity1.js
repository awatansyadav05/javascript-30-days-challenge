function findMedianSortedArrays(nums1, nums2) {
  function findMedianSingleArray(arr) {
      const n = arr.length;
      if (n % 2 === 0) {
          return (arr[Math.floor((n - 1) / 2)] + arr[Math.floor(n / 2)]) / 2;
      } else {
          return arr[Math.floor(n / 2)];
      }
  }

  if (nums1.length === 0) {
      return findMedianSingleArray(nums2);
  }
  if (nums2.length === 0) {
      return findMedianSingleArray(nums1);
  }

  const merged = [];
  let i = 0, j = 0;

  while (i < nums1.length && j < nums2.length) {
      if (nums1[i] < nums2[j]) {
          merged.push(nums1[i]);
          i++;
      } else {
          merged.push(nums2[j]);
          j++;
      }
  }

  while (i < nums1.length) {
      merged.push(nums1[i]);
      i++;
  }

  while (j < nums2.length) {
      merged.push(nums2[j]);
      j++;
  }

  return findMedianSingleArray(merged);
}


console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1,2],[3,4]));
console.log( findMedianSortedArrays([0,0],[0,0])
);
console.log(findMedianSortedArrays([],[1]));


