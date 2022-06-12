/*
 * @lc app=leetcode.cn id=92 lang=typescript
 *
 * [92] 反转链表 II
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
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
function newList(arr) {
    var head = null, cur = null;
    arr.forEach(function (element, i) {
        var node = new ListNode(element);
        if (i === 0) {
            head = cur = node;
        }
        else {
            cur.next = node;
            cur = node;
        }
    });
    return head;
}
console.log(reverseBetween(newList([3,5]), 1, 2));




// function reverseBetween(head, left, right) {
//     if (!head || !head.next || left == right)
//         return head;
//     var i = 0, cur = head, pre = null, startPre = null, start = null, next = null;
//     while (i < right) {
//         i++;
//         next = cur.next;
//         if (i > left) {
//             cur.next = pre;
//         }
//         else if (i == left) {
//             startPre = pre;
//             start = cur;
//         }
//         pre = cur;
//         cur = next;
//     }
//     startPre && (startPre.next = pre);
//     start.next = cur;
//     if (left === 1) {
//         return pre;
//     }
//     else {
//         return head;
//     }
// }
;
// 范例
//  function reverseBetween(head, left, right) {
//   // 因为头节点有可能发生变化，使用虚拟头节点可以避免复杂的分类讨论
//   const dummyNode = new ListNode(-1);
//   dummyNode.next = head;
//   let pre = dummyNode;
//   // 第 1 步：从虚拟头节点走 left - 1 步，来到 left 节点的前一个节点
//   // 建议写在 for 循环里，语义清晰
//   for (let i = 0; i < left - 1; i++) {
//       pre = pre.next;
//   }
//   // 第 2 步：从 pre 再走 right - left + 1 步，来到 right 节点
//   let rightNode = pre;
//   for (let i = 0; i < right - left + 1; i++) {
//       rightNode = rightNode.next;
//   }
//   // 第 3 步：切断出一个子链表（截取链表）
//   let leftNode = pre.next;
//   let curr = rightNode.next;
//   // 注意：切断链接
//   pre.next = null;
//   rightNode.next = null;
//   // 第 4 步：同第 206 题，反转链表的子区间
//   reverseLinkedList(leftNode);
//   // 第 5 步：接回到原来的链表中
//   pre.next = rightNode;
//   leftNode.next = curr;
//   return dummyNode.next;
// };
// function reverseLinkedList(head) {
//   let pre = null;
//   let cur = head;
//   while (cur) {
//       const next = cur.next;
//       cur.next = pre;
//       pre = cur;
//       cur = next;
//   }
// }

function reverseBetween(head, left, right) {
  let first = new ListNode(-1,head)
  let index = 0,cur = first,prev = null,len = right-left+1;
  if(!(head&&head.next) || len<2)return head;
  while(cur){
      if(index<left){
          prev = cur;
          cur = cur.next;
      } else if(index === left){
          let { fragHead,end,next } = reverseFrag(cur,len);
          prev.next = fragHead;
          end.next = next;
          return first.next;
      }
      index++;
  }

  function reverseFrag(head,len){
      let i = 0,cur = head,prev = null;
      while(i++<len){
          let next = cur.next;
          cur.next = prev;
          prev = cur;
          cur = next;
      }

      return {
          fragHead:prev,
          end:head,
          next: cur
      }
  }

};

// @lc code=end
