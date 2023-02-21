// https://leetcode.com/problems/single-element-in-a-sorted-array/submissions/901955182/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let left = 0,
    right = left + 1;
  while (left < right) {
    if (nums[left] === nums[right]) {
      left++;
      right++;
    } else {
      return nums[left];
    }
    left++;
    right++;
  }
};