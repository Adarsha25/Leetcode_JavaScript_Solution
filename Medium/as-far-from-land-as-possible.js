// https://leetcode.com/problems/as-far-from-land-as-possible/submissions/895426229/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
    let q=[];
     for(let i=0;i<grid.length;i++){
         for(let j=0;j<grid[i].length;j++){
             if(grid[i][j]===1) q.push([i,j,0]);
         }
     }
     let max=0;
     while(q.length>0){
         let [row,col,count]=q.shift();
         max=Math.max(max,count);
         let dir=[[-1,0],[1,0],[0,1],[0,-1]];
         for(let d of dir){
             let [dx,dy]=d;
             let x=row+dx;
             let y=col+dy;
             if(x<0 || y<0 || x>=grid.length || y>=grid[0].length) continue;
             if(grid[x][y]==1) continue;
             q.push([x,y,count+1]);
             grid[x][y]=1;
         }
     }
     return max==0?-1:max; 
 };