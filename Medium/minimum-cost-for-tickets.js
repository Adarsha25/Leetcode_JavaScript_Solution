// https://leetcode.com/problems/minimum-cost-for-tickets/submissions/

/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    const n = days.length;
    const maxday = days[n-1];
    const dayset = new Set(days);
    const costtravel = new Map ();
    const recurse = i =>{
        if (i <1||i>maxday) 
                return 0;
        if (costtravel.has(i))
            return costtravel.get(i);
        else {
            const curr = dayset.has(i)
            ?Math.min ( recurse(i+1)+costs[0],recurse(i+7)+costs[1],recurse(i+30)+costs[2]) 
            : recurse(i+1);
            costtravel.set(i,curr);
            return curr;
        }
        
    }  
    return recurse(1);
};