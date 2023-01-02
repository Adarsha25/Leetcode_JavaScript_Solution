// https://leetcode.com/problems/binary-search/submissions/866954965/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(!nums) return -1;
    var start = 0, end = nums.length -1, middle;
    while(start <= end){
        middle = Math.floor((start + end)/2);
        if(nums[middle] == target) return middle;
        else if(nums[middle] < target) start = middle+1;
        else if(nums[middle] > target) end = middle-1;
    }
    return -1;
};
 