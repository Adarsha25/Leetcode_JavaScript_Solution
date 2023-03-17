// https://leetcode.com/problems/implement-trie-prefix-tree/submissions/916974296/

var Trie = function() {
    this.trie = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    const charArr = word.split('');
    let currentTrie = this.trie;
    charArr.forEach(c => {
        if (!currentTrie[c]) {
            const nextTrie = {};
            currentTrie[c] = nextTrie;
        }
        currentTrie = currentTrie[c];
    });
    currentTrie['isEnd'] = true;
};

/** 
 * @param {string} search
 * @return {Object | null} last trie node if it exists
 */
Trie.prototype.getCurrentTrie = function(search) {
    const charArr = search.split('');
    let currentTrie = this.trie;
    for(let i = 0; i < charArr.length; i++) {
        const c = charArr[i];
        if(!currentTrie[c]) {
            return null;
        }
        currentTrie = currentTrie[c];
    }
    return currentTrie;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    const currentTrie = this.getCurrentTrie(word);
    return currentTrie?.isEnd ?? false;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    const currentTrie = this.getCurrentTrie(prefix);
    return currentTrie ? true : false;
};
/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */