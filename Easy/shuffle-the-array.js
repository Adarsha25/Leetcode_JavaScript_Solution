// https://leetcode.com/problems/shuffle-the-array/submissions/892659289/

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let result = []
    for (i=0; i<n; i++){
        result.push(nums[i],nums[i+n])
    }
    return result
};