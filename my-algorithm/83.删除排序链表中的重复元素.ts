/*
 * @lc app=leetcode.cn id=83 lang=typescript
 *
 * [83] 删除排序链表中的重复元素
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if(!head) return null;
  let pre = head, cur = head.next;
  while(cur){
    if(pre.val === cur.val){
      // 不再建立连接，更换当前值继续判断
      cur = cur.next; 
    }else{
      pre.next = cur;
      pre = cur;
      cur = cur.next;
    }
  }
  // 由于最后一个被中断，手动建立连接，防止出现最后一个值被移除后的情况
  pre.next = cur;
  return head;
};
// @lc code=end

