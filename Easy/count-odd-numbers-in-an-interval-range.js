// https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/submissions/896994908/

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let isOdd = 0;
   for(i=low; i <= high; i++){
      (i % 2 !== 0) ? (isOdd += 1) : 0;
   } 
   return isOdd
};