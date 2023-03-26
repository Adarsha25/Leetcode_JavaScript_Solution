// https://leetcode.com/problems/longest-cycle-in-a-graph/submissions/922501497/

/**
 * @param {number[]} edges
 * @return {number}
 */
var longestCycle = function(edges) {
    const visited = new Map();
    const cycle = new Set();
    let dist = 0;
    let ans = 0;
    const dfs = (node) => {
        dist++;
        const neighbor = edges[node];
        if(neighbor === -1) {
            dist = 0;
            return;
        }
        if(cycle.has(neighbor)) {
            ans = Math.max(ans, (dist - visited.get(neighbor)) || 0);
            return;
        }
        if(!visited.has(neighbor)) {
            visited.set(neighbor, dist);
            dfs(neighbor);
        } else {
            ans = Math.max(ans, dist - visited.get(neighbor));
        }
    }
    
    for(let i = 0; i < edges.length; i++) {
        visited.set(i, dist);
        Array.from(visited.keys()).forEach(k => cycle.add(k));
        dfs(i);
        visited.clear();
    }
    
    return ans < 2 ? -1 : ans;
    
};