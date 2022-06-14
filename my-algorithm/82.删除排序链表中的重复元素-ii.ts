/*
 * @lc app=leetcode.cn id=82 lang=typescript
 *
 * [82] 删除排序链表中的重复元素 II
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
  if (!head) {
    return head;
}

const dummy = new ListNode(0, head);

let cur = dummy;
while (cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
        const x = cur.next.val;
        while (cur.next && cur.next.val === x) {
            cur.next = cur.next.next;
        } 
    } else {
        cur = cur.next;
    }
}
return dummy.next;
}

// function deleteDuplicates(head: ListNode | null): ListNode | null {
//   if(!head)return null;
//   let ret = new ListNode(-1,head), pre = ret, cur = head;
//   while(cur && cur.next){
//     if(pre.next.val !== cur.next.val){
//       cur = cur.next;
//       pre = pre.next;
//     }else{
//       while (cur && cur.next && pre.next.val === cur.next.val) {
//         cur = cur.next;
//       }
//       pre.next = cur.next;
//       cur = cur.next;
//     }
//   }
//   return ret.next;
// };
// @lc code=end

