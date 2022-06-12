/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
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

// last
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if(!head) return;
  let pre = new ListNode(-1,head), cur = head;
  // 当前节点优先n
  for(let i =0; i<n; i++){
    cur = cur.next;
  }
  if(!cur) return head.next;

  while (cur) {
    cur = cur.next;
    pre = pre.next;
  }
  pre.next = pre.next.next;
  return head;

};

// first
// function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
//   if(!head) return;
//   let len = 1,cur = head;
//   while(cur.next){
//     len++;
//     cur = cur.next;
//   }
//   let pos = len - n;
//   let pre = null;
//   cur = head;
//   for(let j = 0; j < len; j++){
//     if(j==pos){
//       if(!pre){head = cur.next}else{pre.next = cur.next;}
//       return head;
//     }
//     pre = cur;
//     cur = cur.next
//   }
// };
// @lc code=end

