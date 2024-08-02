//task 1
let twosum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
  return [];
}

const testcase = [
  { nums: [2, 7, 25, 28], target: 9 },
  { nums: [3, 2, 4], target: 6 },
  { nums: [3, 3], target: 3 },
  {
    nums: [1, 3, 5, 7], target: 10
  }
];

testcase.forEach(({ nums, target }) => {
  const result = twosum(nums, target);
  console.log(`For nums: ${nums} and target: ${target}, the indices are: ${result}`);
});