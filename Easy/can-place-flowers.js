// https://leetcode.com/problems/can-place-flowers/submissions/918774567/

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    flowerbed = [0, ...flowerbed, 0];
   for(i = 0; i < flowerbed.length; i++){
       if(flowerbed[i-1] === 0 && flowerbed[i] === 0 && flowerbed[i+1] === 0){
           flowerbed[i] = 1
           n -= 1
        }
   }
   return n <= 0
};