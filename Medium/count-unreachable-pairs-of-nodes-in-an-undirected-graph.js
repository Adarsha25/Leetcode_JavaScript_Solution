// https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/submissions/921864746/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPairs = function(n, edges) {
    const adjacent = Array.from(Array(n), () => new Array());
     const visited = new Set();
     for (const [v, w] of edges){
         adjacent[v].push(w);
         adjacent[w].push(v);
     }
     
     const depthFirstSearch = (node) => {
         if (visited.has(node)) return 0;
         let count = 1;
         visited.add(node);
         for (const neighbor of adjacent[node]) count += depthFirstSearch(neighbor);
         return count;
     };
 
     let result = 0, sum = 0, node = 0;
     while(node < n){
         if (!visited.has(node)){
             const size = depthFirstSearch(node);
             result += size * sum;
             sum += size;
         }
         node++;
     }
     return result; 
 };