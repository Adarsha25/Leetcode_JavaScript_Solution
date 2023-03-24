// https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/submissions/921331770/

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    let adj = [];
  
      for(let [from, to] of connections){
          adj[from] ??= [];
          adj[to] ??= [];
  
          adj[from].push([to,true]);
          adj[to].push([from,false]);
      }
  
      let res = 0;
      let visited = Array(n).fill(false);
      
      let queue = [0];
      while(queue.length){
          let q = queue.shift();
          visited[q] = true;
          for(let [station, canTravel] of adj[q]){
              if(visited[station]) continue;
              queue.push(station);
              if(canTravel) res++;
          }
      }
      return res; 
  };