// https://leetcode.com/problems/construct-quad-tree/submissions/905903223/

/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * 
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function(grid) {
    function create(i, j, l) {
        // Edge case where only one grid is considered
        if(l===1) return new Node(grid[i][j],true,null,null,null,null)
        
        // Create a temporary node
        let node = new Node(false,false,null,null,null,null), half=l>>1
        // Create temporary four nodes
        let tl = create(i, j, half)
        let tr = create(i, half + j, half)
        let bl = create(half + i, j, half)
        let br = create(half + i, half + j, half)
        
        // If all 4 are leaf and same value
        if(tl.isLeaf && tr.isLeaf && bl.isLeaf && br.isLeaf
            && tl.val===tr.val && tl.val===bl.val && tl.val===br.val
        ) node=tl
        
        // Assign 4 nodes to current if current node is not a leaf
        if (!node.isLeaf) {
            node.topLeft = tl
            node.topRight = tr
            node.bottomLeft = bl
            node.bottomRight = br
        }
        
        return node
    }

    return create(0, 0, grid.length)
};