/*
 * @lc app=leetcode.cn id=621 lang=typescript
 *
 * [621] 任务调度器
 */

// @lc code=start
function leastInterval(tasks: string[], n: number): number {
  const freq = _.countBy(tasks);
  const maxExec = Math.max(...Object.values(freq) as number[]);
  let maxCount = 0;
  Object.values(freq).forEach(v=>{
    if(v===maxExec) maxCount++;
  })
  return Math.max((maxExec-1)*(n+1)+maxCount,tasks.length)
};
// @lc code=end

