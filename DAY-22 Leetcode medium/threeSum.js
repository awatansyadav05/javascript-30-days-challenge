function threeSum(nums) {
  nums.sort((a, b) => a - b);
  let triplets = [];
  
  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicate values for i
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1; // start from the next element
    let right = nums.length - 1;
    let target = -nums[i];

    while (left < right) {
      let sum = nums[left] + nums[right];
      
      if (sum === target) {
        triplets.push([nums[i], nums[left], nums[right]]);
        
        // Skip duplicate values for left
        while (left < right && nums[left] === nums[left + 1]) left++;
        // Skip duplicate values for right
        while (left < right && nums[right] === nums[right - 1]) right--;
        
        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return triplets;
}

let nums1 = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums1));
