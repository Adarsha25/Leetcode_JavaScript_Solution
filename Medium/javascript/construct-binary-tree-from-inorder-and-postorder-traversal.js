// https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/submissions/916362872/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (!inorder.length || !postorder.length) {
         return null;
     }
     var val = postorder.pop();
     var index = inorder.indexOf(val);
     var node = new TreeNode(val);
     node.right = buildTree(inorder.slice(index+1, inorder.length), postorder);
     node.left = buildTree(inorder.slice(0, index), postorder);
     return node; 
 };