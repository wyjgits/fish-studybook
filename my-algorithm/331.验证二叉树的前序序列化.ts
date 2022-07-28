/*
 * @lc app=leetcode.cn id=331 lang=typescript
 *
 * [331] 验证二叉树的前序序列化
 */

// @lc code=start
function isValidSerialization(preorder: string): boolean {
  let n = preorder.length;
  let stack = [1];
  let i = 0;
  while (i < n) {
    if (!stack.length) return false;
    if (preorder[i] === ',') i++;
    else if (preorder[i] === '#') {
      stack[stack.length - 1]--;
      if (stack[stack.length - 1] == 0) {
        stack.pop();
      }
      i++
    } else {
      while (i < n && preorder[i] !== ',') {
        i++
      }
      stack[stack.length - 1]--;
      if (stack[stack.length - 1] == 0) {
        stack.pop();
      }
      stack.push(2);
    }
  }
  return !stack.length;

};
// @lc code=end

