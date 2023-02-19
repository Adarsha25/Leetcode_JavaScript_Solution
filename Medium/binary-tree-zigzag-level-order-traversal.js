// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/submissions/901097824/

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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) return [];
     
     let output = []; 
     let queue = []; 
     queue.push([root,0]);
     
     while (queue.length > 0) {
         let [current, level] = queue.shift();
         
         output[level] = output[level] || [];
         if (level % 2 === 1) {
             output[level].unshift(current.val);
         } else {
             output[level].push(current.val);    
         }
         
         if (current.left) queue.push([current.left, level + 1]); 
         if (current.right) queue.push([current.right, level + 1]);
     }
     
     return output;     
 };