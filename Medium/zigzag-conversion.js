// https://leetcode.com/problems/zigzag-conversion/submissions/890797759/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const res = [];

    if (numRows < 2) {
        return s;
    }
    for(let i = 0; i < numRows; i++) {
        let j= i;
        while (j < s.length) {
            res.push(s[j]);

            if (i!== 0 && i !== numRows - 1) {
                const k =(numRows - i) * 2 - 1 - 1 + j;
                if (k < s.length) {
                    res.push(s[k]);
                }
            }
            j += numRows *2-1-1;
        }

    }
    return res.join('');
};