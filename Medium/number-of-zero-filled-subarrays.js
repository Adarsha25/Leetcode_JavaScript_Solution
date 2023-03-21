// https://leetcode.com/problems/number-of-zero-filled-subarrays/submissions/919614141/

/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let count = 0; 
    let subcount = 0; 

 for (const num of nums) {
  if (num !== 0) {
     subcount = 0; 
     continue; 
   }

   subcount++;

  count += subcount;
 }

 return count;
};