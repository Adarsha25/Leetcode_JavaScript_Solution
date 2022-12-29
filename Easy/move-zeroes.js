// https://leetcode.com/problems/move-zeroes/description/?envType=study-plan&id=algorithm-i

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var zlen = 0
 do {
   nums.forEach((el, i) => {
     if (el === 0) {
       nums.splice(i, 1)
       zlen += 1
     }
   })
 } while (nums.includes(0))
 nums.push(...Array(zlen).fill(0))
   
};