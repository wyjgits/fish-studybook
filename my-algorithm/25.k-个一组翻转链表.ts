/*
 * @lc app=leetcode.cn id=25 lang=typescript
 *
 * [25] K 个一组翻转链表
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
//  class ListNode {
//   val: number
//   next: ListNode | null
//   constructor(val?: number, next?: ListNode | null) {
//       this.val = (val===undefined ? 0 : val)
//       this.next = (next===undefined ? null : next)
//   }
// }

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if(!head) return null;
  let ret = new ListNode(-1, head),pre = ret;
  do{
    pre.next = reverse(pre.next, k);
    for(let i = 0; i < k && pre; i++ ){
      pre = pre.next;
    }
    if(!pre) break;
  }while(true)
  return ret.next;
};
function reverse(head: ListNode,n) {
  let pre = head,cur = head,con = n;
  while(--n && pre){
    pre = pre.next;
  }
  if(!pre) return head;
  pre = null;
  while(con--){
    [cur.next,pre,cur] = [pre, cur, cur.next];
  }
  head.next = cur;
  return pre;
}
// @lc code=end

