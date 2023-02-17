// https://leetcode.com/problems/minimum-distance-between-bst-nodes/submissions/899829224/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function(root) {
    let res = [];
     const inorderTraversal = (root) => {
         if(root){
             inorderTraversal(root.left);
             res.push(root.val);
             inorderTraversal(root.right);
         }
     }
     let minVal = Infinity;
     inorderTraversal(root);
     for(let i = 0; i < res.length - 1; ++i)
         minVal = Math.min(minVal, res[i + 1] - res[i]);
     return minVal; 
 };