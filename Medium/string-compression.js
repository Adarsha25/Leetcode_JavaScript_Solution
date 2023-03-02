// https://leetcode.com/problems/string-compression/submissions/907856463/

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let count = 1;
    let start = 0;

  for (let i = 1; i <= chars.length; i++) {
    const current = chars[i];
    const pre = chars[i - 1];

    if (current === pre) {
      count++;
    } else {
      if (count === 1) {
        start = i;
        continue;
      }

      const countStrs = count.toString().split('');
      chars.splice(start + 1, count - 1, ...countStrs);
	  
      i = start + countStrs.length + 1;
      start = i;
      count = 1;
    }
  }
};