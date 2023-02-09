// https://leetcode.com/problems/naming-a-company/submissions/894757389/

/**
 * @param {string[]} ideas
 * @return {number}
 */
var distinctNames = function(ideas) {
    let n = ideas.length
    let suffices = new Array(26)
    for (let i = 0; i < 26; i++) {
        suffices[i] = new Set()
    }

    for (let i = 0; i < n; i++) {
        let idx = ideas[i].charCodeAt(0) - 'a'.charCodeAt(0)
        suffices[idx].add(ideas[i].slice(1))
    }

    let res = 0
    for (let i = 0; i < 25; i++) {
        for (j = i+1; j < 26; j++) {
            let mutualCount = 0
            let set1 = suffices[i]
            let set2 = suffices[j]
            for (let suffix of set1) {
                if (set2.has(suffix)) mutualCount++
            }
            res += 2 * (set1.size - mutualCount) * (set2.size - mutualCount)
        }
    }
    return res
};