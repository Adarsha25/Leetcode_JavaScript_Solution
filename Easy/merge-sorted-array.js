//  https://leetcode.com/problems/merge-sorted-array/submissions/870550022/?envType=study-plan&id=data-structure-i

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    nums1.length = m;
    nums2.length = n;
    nums1.push(...nums2);
    nums1.sort(function(a,b){return a - b})
};