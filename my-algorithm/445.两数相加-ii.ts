/*
 * @lc app=leetcode.cn id=445 lang=typescript
 *
 * [445] 两数相加 II
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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let start1 = [],start2 = [];
  let hair = new ListNode(-1);
  while(l1) {
    start1.push(l1.val);
    l1 = l1.next;
  }
  while(l2) {
    start2.push(l2.val);
    l2 = l2.next;
  }
  let ten = 0;
  while (start1.length || start2.length || ten) {
    let num1 = start1[start1.length - 1] === undefined? 0:start1.pop();
    let num2 = start2[start2.length - 1] === undefined? 0:start2.pop();
    let val = num1 + num2 + ten;
    ten = val / 10 | 0;
    let temp = new ListNode(val % 10, hair.next);
    hair.next = temp;
  }
  return hair.next;
};
// @lc code=end

