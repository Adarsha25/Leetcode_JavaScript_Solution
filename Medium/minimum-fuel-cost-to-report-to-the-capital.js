// https://leetcode.com/problems/minimum-fuel-cost-to-report-to-the-capital/submissions/896678937/

/**
 * @param {number[][]} roads
 * @param {number} seats
 * @return {number}
 */
var minimumFuelCost = function(roads, seats) {
    let n = roads.length + 1
    if (roads.length == 0) return 0

    let adj = new Array(n).fill().map(() => [])

    for (let road of roads) {
        adj[road[0]].push(road[1])
        adj[road[1]].push(road[0])
    }

    let res = 0
    let dfs = function (node, parent) {
        let representatives = 0
        for (let neighbor of adj[node]) {
            if (parent == neighbor) continue
            representatives += dfs(neighbor, node)
        }
        if (node == 0) return 0
        representatives++
        res += Math.ceil(representatives/seats)
        return representatives
    }

    dfs(0, -1)
    return res
};