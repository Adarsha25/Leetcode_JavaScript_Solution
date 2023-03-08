// https://leetcode.com/problems/koko-eating-bananas/submissions/911514482/

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let startk = 1;
     let endk = Math.max(...piles);
     
     while(startk <= endk){
         let midk = Math.floor(startk + (endk - startk)/2);
         let hrs = 0;
         for(let pile of piles){
             hrs += Math.ceil(pile/midk);
         }
         if(hrs > h){
            startk = midk + 1;
         }else{
             endk = midk - 1;
         }
     }
     return startk; 
 };