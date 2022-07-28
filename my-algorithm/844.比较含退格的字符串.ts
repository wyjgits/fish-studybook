/*
 * @lc app=leetcode.cn id=844 lang=typescript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
function backspaceCompare(s: string, t: string): boolean {
  return processed(s) === processed(t);
};
function processed(str){
  let stack = [];
  for(let ch of str){
    if(ch=='#'){
      stack.pop();
    }else{
      stack.push(ch);
    }
  }
  return stack.join('')
}
// @lc code=end

