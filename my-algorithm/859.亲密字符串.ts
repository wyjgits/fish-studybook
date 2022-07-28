/*
 * @lc app=leetcode.cn id=859 lang=typescript
 *
 * [859] 亲密字符串
 */

// @lc code=start
function buddyStrings(s: string, goal: string): boolean {
  if(s.length !== goal.length) return false;
  if(s === goal) return isRepeat(s);
  let i = 0
  while(s[i]===goal[i]) i++;
  let j = i+1;
  for(;j<s.length;j++){
    if(s[j]!==goal[j]) {
      if(s[i]===goal[j] && s[j]===goal[i]){
        return s.slice(j+1) === goal.slice(j+1);
      }else{
        return false;
      }
    }
  }
  return false;
  function isRepeat(s:string){
    let map = new Map<string,number>();
    for(let i = 0;i<s.length;i++){
        let c = s[i];
        if(map.has(c)){
          return true;
        }else{
            map.set(c,1);
        }
    }
    return false;
  }
};
// @lc code=end

