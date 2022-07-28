/*
 * @lc app=leetcode.cn id=946 lang=typescript
 *
 * [946] 验证栈序列
 */

// @lc code=start
var validateStackSequences = function (pushed, popped) {
  let stack = [], cur = 0;
  for (let item of pushed) {
    stack.push(item);
    while (stack[stack.length-1] === popped[cur]&&stack.length) {
      stack.pop()
      cur++;
    }
  }
  return !stack.length;
};
// @lc code=end

