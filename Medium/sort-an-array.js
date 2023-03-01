// https://leetcode.com/problems/sort-an-array/submissions/907151861/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    var n = nums.length;
    for (var i = 0; i <n-1; i++) {
        var min = i;
        for (var j = i+1; j < n; j++ ) {
            if (nums[j] < nums[min]) {
                min = j;    
            }
        }
        var temp = nums[i];
        nums[i] = nums[min];
        nums[min] = temp;
    }
    return nums;
};