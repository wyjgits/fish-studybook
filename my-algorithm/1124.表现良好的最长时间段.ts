/*
 * @lc app=leetcode.cn id=1124 lang=typescript
 *
 * [1124] 表现良好的最长时间段
 */

// @lc code=start
function longestWPI(hours: number[]): number {
  let preSum = new Array(hours.length + 1).fill(0);
  for (let i = 0; i < hours.length; i++) {
    if (hours[i] > 8) preSum[i + 1] = preSum[i] + 1;
    else preSum[i + 1] = preSum[i] - 1;
  }
  let stack = [];
  stack.push(0);
  for (let i = 1; i < preSum.length; i++) {
    if (preSum[i] < preSum[stack[stack.length - 1]]) stack.push(i);
  }
  let max = 0;
  for (let i = preSum.length - 1; i > max; i--) {
    while (stack.length && preSum[stack[stack.length - 1]] < preSum[i]) {
      max = Math.max(max, i - stack.pop());
    }
  }
  return max;
};
// @lc code=end

