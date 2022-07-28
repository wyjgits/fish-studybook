/*
 * @lc app=leetcode.cn id=143 lang=typescript
 *
 * [143] 重排链表
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

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
  let hair = new ListNode(-1, head);
  let left = hair,right = hair;
  while (right && right.next) {
    right = right.next;
    right = right.next;
    left = left.next;
  }
  right = left.next;
  left.next = null;
  left = head;
  right = reverse(right);
  while (left && right) {
    let lNext = left.next;
    let rNext = right.next;
    right.next = left.next;
    left.next = right;
    left = lNext;
    right = rNext;
  }
  return hair.next;
};
function reverse(head: ListNode | null): void {
  let temp = new ListNode(-1);
  while (head) {
    let next = head.next;
    head.next = temp.next;
    temp.next = head;
    head = next;
  }
  return temp.next;
}


// @lc code=end

