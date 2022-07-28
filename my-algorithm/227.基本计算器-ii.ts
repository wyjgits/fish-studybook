/*
 * @lc app=leetcode.cn id=227 lang=typescript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
function calculate(s: string): number {
  s = s.trim();
  let stack = new Array();
  let preSign = '+';
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    if (!Number.isNaN(s[i]) && s[i] !== ' ') {
      num = num * 10 + Number(s[i]);
    }
    if (Number.isNaN(s[i]) || i == s.length - 1) {
      switch (preSign) {
        case '+':
          stack.push(num);
          break;
        case '-':
          stack.push(-num);
          break;
        case '*':
          stack.push(stack.pop() * num);
          break;
        default:
          stack.push(stack.pop() / num | 0);
          break;      
      }
      preSign = s[i];
      num = 0;
    }
  }
  return stack.reduce((a, b) => a + b);
};
// @lc code=end

