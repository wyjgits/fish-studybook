/*
 * @lc app=leetcode.cn id=682 lang=typescript
 *
 * [682] 棒球比赛
 */

// @lc code=start
function calPoints(ops: string[]): number {
  let res = [];
  for(let num of ops){
    switch(num){
      case 'C':
        res.pop();
        break;
      case 'D':
        res.push(res[res.length-1]*2);
        break;
      case '+':
        res.push(res[res.length-1]+res[res.length-2]);
        break;
      default:
        res.push(Number(num));
        break;
    }
  }
  return res.reduce((a,b)=>a+b,0);
};
// @lc code=end

