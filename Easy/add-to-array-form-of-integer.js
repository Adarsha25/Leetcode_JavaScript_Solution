// https://leetcode.com/problems/add-to-array-form-of-integer/submissions/898554592/

/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    let add = [], i=num.length
    while(i-- > 0 || k){
        if(i >= 0)  k += num[i];
        add.unshift(k%10)
        k = Math.floor(k/10)
    }
    return add
};