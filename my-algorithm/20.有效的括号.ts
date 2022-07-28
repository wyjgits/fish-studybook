/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  let stack = [];
  for (let ch of s) {
    switch (ch) {
      case '(':
      case '[':
      case '{':
        stack.push(ch);
        break;
      case ')':
        if (stack.pop() !== '(') return false;
        break;
      case '}':
        if (stack.pop() !== '{') return false; 
        break;
      case ']':
        if (stack.pop() !== '[') return false;
        break;       
    }
  }
  return !stack.length;
};
// @lc code=end

