// https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/submissions/902981200/

/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, D) {
    const checkEligible = capacity => {
        let load  = 0, day = 0;
        for(const weight of weights) {
            if(capacity < weight) return checkEligible(capacity + 1);
            if(load + weight > capacity) {
                day++;
                if(day > D) return checkEligible(capacity + 1);
                load = weight;
            } else {
                load += weight;
            }
        }
        if(load > 0) day++;
        return day <= D ? capacity : checkEligible(capacity + 1);
    }
    return checkEligible(Math.floor(weights.reduce((a, b) => a + b) / D));
};