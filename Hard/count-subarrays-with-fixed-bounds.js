// https://leetcode.com/problems/count-subarrays-with-fixed-bounds/submissions/908886895/

/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function(nums, minK, maxK) {
    let lastMin=-1;
      let lastMax=-1;
      let start=0;
      let count=0;
      for(let i=0; i<nums.length; i++){
          if(nums[i]<minK || nums[i]>maxK){
              start = i+1;
              lastMin = i;
              lastMax = i;
              continue;
          }
          if(nums[i] == minK){
              lastMin = i;
          }
          if(nums[i] == maxK){
              lastMax = i;
          }
          valid = (i-start+1);
          invalid = i - (Math.min(lastMin, lastMax) + 1) + 1;
          count+= valid - invalid;
          console.log(start,valid,invalid,count);
        }
      return count;  
  };