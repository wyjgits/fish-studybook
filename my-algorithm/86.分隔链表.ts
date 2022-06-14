/*
 * @lc app=leetcode.cn id=86 lang=typescript
 *
 * [86] 分隔链表
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

function partition(head: ListNode | null, x: number): ListNode | null {
 if(!head)return null;
 let smallH = new ListNode(),bigH = new ListNode();
 let smallL = smallH,bigL = bigH;
 let cur=head
 while (cur) {
   const next = cur.next;
    cur.next = null;
   if(cur.val < x){
    smallL.next = cur;
    smallL = cur;
   }else {
     bigL.next = cur;
     bigL = cur;
   }
   cur = next;
 }
 smallL.next = bigH.next;
 return smallH.next;
};
// @lc code=end

