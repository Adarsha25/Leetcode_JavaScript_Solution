// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/submissions/908448977/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(!needle.length) return 0;
    if(!haystack.includes(needle)) return -1;
    return haystack.split(`${needle}`)[0].length;
};