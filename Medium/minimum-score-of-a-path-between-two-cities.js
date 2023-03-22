// https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/submissions/920186804/

/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function(n, roads) {
    let hash = {};
    let ans = Number.MAX_SAFE_INTEGER;
    
    for (let i = 0; i < roads.length; i++) {
        let x = roads[i][0];
        let y = roads[i][1];
        let d = roads[i][2];
        
        if (hash[x]) {
            hash[x].push([y, d]);
        } else {
            hash[x] = [];
            hash[x].push([y, d]);
        }
        
        if (hash[y]) {
            hash[y].push([x, d]);
        } else {
            hash[y] = [];
            hash[y].push([x, d]);
        }
    }
        
    let visited = {};
    function solve(x, hash) {
        for (let y of hash[x]) {
            ans = Math.min(ans, y[1]);
            if (!visited[y[0]]) {
                visited[y[0]] = true;
                solve(y[0], hash);
            }
        }
    }
    
    solve(1, hash);
    return ans;
};