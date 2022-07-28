/*
 * @lc app=leetcode.cn id=1021 lang=typescript
 *
 * [1021] 删除最外层的括号
 */

// @lc code=start
function removeOuterParentheses(s: string): string {
  let res = '';
  let opened = 0;
  for (let ch of s) {
    if (ch === '(' && opened++ > 0) res += ch;
    if (ch === ')' && opened-- > 1) res += ch;
  }
  return res;
};
// @lc code=end

