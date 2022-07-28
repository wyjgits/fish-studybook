/*
 * @lc app=leetcode.cn id=636 lang=typescript
 *
 * [636] 函数的独占时间
 */

// @lc code=start
function exclusiveTime(n: number, logs: string[]): number[] {
  let res = new Array(n).fill(0);
  let go = 0;
  function next() {
    let dure = 0;
    const start = logs[go].split(':');
    while (go < logs.length - 1 && logs[++go].indexOf('s') !== -1) {
      dure = dure + next();
    }
    const end = logs[go].split(':');
    let sum = Number(end[2]) - Number(start[2]) + 1 - dure;
    res[Number(start[0])] = res[Number(start[0])] + sum;
    return sum + dure;
  }
  while (go < logs.length) {
    next();
    go++
  }
  return res;
};
// @lc code=end

