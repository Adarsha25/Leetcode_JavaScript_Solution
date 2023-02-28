// https://leetcode.com/problems/find-duplicate-subtrees/submissions/906583457/

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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    let seen = {};
    let output = [];
    
    traverse(root);
    
    return output; 
    
    function traverse(node){
        if(!node) return "null";
        
        let left = traverse(node.left);
        let right = traverse(node.right);
        
        let key = `${node.val}-${left}-${right}`;
        
        seen[key] = (seen[key] || 0) + 1;
        if(seen[key] == 2) output.push(node);
        
        return key;
    }
};