// https://leetcode.com/problems/add-binary/submissions/897878460/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const aBinary = `0b${a}`
   const bBinary = `0b${b}`
   const sum = BigInt(aBinary) + BigInt(bBinary)
   return sum.toString(2)
 };