// https://leetcode.com/problems/fruit-into-baskets/submissions/893378914/

/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    const K = 2;

 if (!fruits || !fruits.length) return 0;
 if (fruits.length < K) return fruits.length;

 let total = 0;
 let currentWindow = 0;

 let basket = new Map();

 let left = 0;
 let right = 0;

 while (right < fruits.length) {
   basket.set(
     fruits[right],
     basket.get(fruits[right]) ? basket.get(fruits[right]) + 1 : 1
   );
   currentWindow++;

   
   while (basket.size > K) {
     let fruit = fruits[left];
     let reducedAmount = basket.get(fruit) - 1;

     if (reducedAmount == 0) basket.delete(fruit);
     else basket.set(fruit, reducedAmount);

     currentWindow--;
     left++;
   }

   total = Math.max(currentWindow, total);
   right++;
 }

 return total;

};