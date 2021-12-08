/*
 * @lc app=leetcode.cn id=202 lang=typescript
 *
 * [202] 快乐数
 */

// @lc code=start
function isHappy(n: number): boolean {
  let slow = n,fast = getNext(n);
  while(fast!==1 && slow!==fast){
      slow = getNext(slow);
      fast = getNext(getNext(fast));
  }
  return fast==1
};

function getNext(n:number){
  let val = 0
  do {
      val +=Math.pow(n%10,2);
      n = Math.floor(n/10);
  }while(n)
  return val;
}
// @lc code=end

