/*
 * @lc app=leetcode.cn id=138 lang=typescript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

function copyRandomList(head: Node | null): Node | null {
    if(!head) return null;
    const map = new Map();
    let cur = head;
    while(cur){
      map.set(cur,new Node(cur.val));
      cur = cur.next;
    }
    cur = head;
    while (cur) {
      map.get(cur).next = cur.next ? map.get(cur.next) : null;
      map.get(cur).random = cur.random ? map.get(cur.random) : null;
      cur = cur.next;
    }
    return map.get(head)
}
// @lc code=end

