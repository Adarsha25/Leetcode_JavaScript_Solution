// https://leetcode.com/problems/linked-list-random-node/submissions/912775520/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function(head) {
    this.listArray = []; //public variable
         let curr = head;  //private variable
         
         while(curr !== null) {
             this.listArray.push(curr)
             curr = curr.next;
         }
         this.length = this.listArray.length; //public variable
 };
 
 /**
  * @return {number}
  */
 Solution.prototype.getRandom = function() {
     return this.listArray[Math.floor(Math.random() * this.length)].val 
 };
 
 /** 
  * Your Solution object will be instantiated and called as such:
  * var obj = new Solution(head)
  * var param_1 = obj.getRandom()
  */