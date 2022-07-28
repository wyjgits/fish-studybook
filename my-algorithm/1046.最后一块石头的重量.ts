/*
 * @lc app=leetcode.cn id=1046 lang=typescript
 *
 * [1046] 最后一块石头的重量
 */

// @lc code=start
function lastStoneWeight(stones: number[]): number {
  const maxHeap = new MaxPriorityQueue();
    for (let i = 0; i < stones.length; i++) {
      maxHeap.enqueue('x', stones[i]);
    }
    
    while (maxHeap.size() > 1) {
        const a = maxHeap.dequeue()['priority'];
        const b = maxHeap.dequeue()['priority'];
        if (a > b) {
          maxHeap.enqueue('x', a - b);
        }
    }
    return maxHeap.isEmpty() ? 0 : maxHeap.dequeue()['priority'];

};
// @lc code=end

