/*
 * @lc app=leetcode.cn id=61 lang=typescript
 *
 * [61] 旋转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if(!head) return null;
  let cur = head,len=1;
  while(cur.next){
    cur = cur.next;
    len++
  }
  cur.next = head;
  cur = head;
  for(let i = 0; i<len-k%len-1;i++){
    cur = cur.next;
  }
  let newHead = cur.next;
  cur.next = null;
  return newHead;
};
// @lc code=end

