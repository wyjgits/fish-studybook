/*
 * @lc app=leetcode.cn id=141 lang=typescript
 *
 * [141] 环形链表
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

// mine
 function hasCycle0(head: ListNode | null): boolean {
  if(!head || !head.next || !head.next.next) return false;
  let slow = head.next, fast = head.next.next;
  while(fast!==slow){
    if(!fast.next?.next) return false;
    slow = slow.next;
    fast = fast.next.next;
  }
  return true
};

// answer
function hasCycle(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
          return true;
      }
  }
  return false;
};
// @lc code=end

