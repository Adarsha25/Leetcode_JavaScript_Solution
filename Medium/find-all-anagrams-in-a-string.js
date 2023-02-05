// https://leetcode.com/problems/find-all-anagrams-in-a-string/submissions/892100847/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let anag = {}
    for (let c of p) {
        anag[c] = (anag[c] || 0) + 1
    }

    let r = 0, l = 0, count = 0
    let res = new Array()
    while (r < s.length) {
        if (anag[s[r]] > 0) count++
        anag[s[r]]--
        r++
        if (count == p.length) res.push(l)
        if (r - l == p.length) {
            if (anag[s[l]] >= 0) count--
            anag[s[l]]++
            l++
        }
    }
    return res
};