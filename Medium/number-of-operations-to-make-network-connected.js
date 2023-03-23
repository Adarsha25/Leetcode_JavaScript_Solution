// https://leetcode.com/problems/number-of-operations-to-make-network-connected/submissions/920829668/

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function(n, connections) {
    const len = connections.length;
     if(len < n - 1) return -1;
     // dsu
     const network = new Array(n).fill(0).map((_, i) => i);
     const find = (a) => {
         if(a == network[a]) return a;
         return network[a] = find(network[a]);
     }
     const union = (a, b) => {
         const pa = find(a);
         const pb = find(b);
         if(pa != pb) network[pa] = pb;
     }
     for(let conn of connections) {
         const [from, to] = conn;
         union(from, to);
     }
     for(let i = 0; i < n; i++) {
         find(i);
     }
     const netCount = new Set(network);
     return  netCount.size - 1 
 };