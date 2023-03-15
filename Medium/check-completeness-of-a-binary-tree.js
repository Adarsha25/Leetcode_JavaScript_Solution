// https://leetcode.com/problems/check-completeness-of-a-binary-tree/submissions/915792328/

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
 * @return {boolean}
 */
var isCompleteTree = function(root) {
    let queue = [root]; 
    let isPreviousNodeNull = false;

 while (queue.length > 0) {
    const node = queue.shift(); 

    if (!node) {
      isPreviousNodeNull = true;
      continue;
    }

    if (isPreviousNodeNull) return false; 

    queue.push(node.left, node.right);
  }
  return true;
};