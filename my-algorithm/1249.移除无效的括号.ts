/*
 * @lc app=leetcode.cn id=1249 lang=typescript
 *
 * [1249] 移除无效的括号
 */

// @lc code=start
function minRemoveToMakeValid(s: string): string {
  const n = s.length,
  leftDel = [],
  rightDel = [];
  for (let i = 0; i < n; i++) {
    const char = s[i];
    if (char === '(') {
      leftDel.push(i);
    } else if (char === ')') {
      if (leftDel.length > 0) {
        leftDel.pop();
      } else {
        rightDel.push(i);
      } 
    }
  }
const res = [...s],
filter = leftDel.concat(rightDel),
I = filter.length;
for (let i = 0; i < I; i++) {
  res[filter[i]]= '';
}
return res.join('');
};
// @lc code=end

