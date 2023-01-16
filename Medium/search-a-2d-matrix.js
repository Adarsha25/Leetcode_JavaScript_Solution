//  https://leetcode.com/problems/search-a-2d-matrix/submissions/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for(let ele of matrix){
        if(ele[0]<=target&&ele[ele.length-1]>=target){
            for(let i=0;i<ele.length;i++){
                if(ele[i]==target){
                    return true
                }
            }
        }
    }
    return false
    
};