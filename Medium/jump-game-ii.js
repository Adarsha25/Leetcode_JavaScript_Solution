// https://leetcode.com/problems/jump-game-ii/submissions/894029013/

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let currMax = 0;
    let jump = 0;
    let oldMax = 0;
    for (let i=0;i<nums.length-1;i++) {
        currMax = Math.max(currMax, i+nums[i]);
        if (i == oldMax) {
            jump++;
            oldMax = currMax;
        }
    }
    return jump;
};