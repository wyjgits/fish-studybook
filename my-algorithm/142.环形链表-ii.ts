/*
 * @lc app=leetcode.cn id=142 lang=typescript
 *
 * [142] 环形链表 II
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

// function detectCycle(head: ListNode | null): ListNode | null {
//   let cur = head;
//   let checked = new Set();
//   while(cur){
//       if(checked.has(cur)){
//           return cur;
//       } else {
//           checked.add(cur)
//       }
//       cur = cur.next
//   }
//   return null
// };

function detectCycle(head: ListNode | null): ListNode | null {
  let fast = head,slow=head;
  while(fast && fast.next){
    fast = fast.next.next;
    slow = slow.next;
    if(fast==slow){
      let ptr = head;
      // while (true) {
      //   if(ptr==slow) return slow;
      //   ptr = ptr.next;
      //   slow = slow.next;
      // }
      while (ptr != slow) {
        ptr = ptr.next;
        slow = slow.next;
      }
    }
  }
  return null;
};
// @lc code=end

