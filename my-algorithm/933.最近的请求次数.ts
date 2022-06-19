/*
 * @lc app=leetcode.cn id=933 lang=typescript
 *
 * [933] 最近的请求次数
 */

// @lc code=start
class RecentCounter {
    queue = []
    constructor() {

    }

    ping(t: number): number {
      this.queue.push(t);
      while(t-this.queue[0]>3000){
        this.queue.shift()
      }

      return this.queue.length;
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
// @lc code=end

