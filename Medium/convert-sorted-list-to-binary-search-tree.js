// https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/submissions/913211587/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    const numOfNodes = countNodes(head)
    return traverse(numOfNodes)
    
    function traverse(n) {
        if (n <= 0) return null
        
        const left = traverse(Math.floor(n / 2))
        const root = new TreeNode(head.val)       
        root.left = left
        head = head.next
        root.right = traverse(n - Math.floor(n / 2) - 1)
        
        return root
    }
    
    function countNodes(node) {
        if (!node) return 0
        return 1 + countNodes(node.next)
    }
};