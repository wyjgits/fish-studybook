/*
 * @lc app=leetcode.cn id=969 lang=typescript
 *
 * [969] 煎饼排序
 */

// @lc code=start
function pancakeSort(arr: number[]): number[] {
  let ans = [],max;
  while(arr.length > 1){
    max = getMaxIndex(arr);
    max > 0 && (ans.push(max+1));
    reverse(arr,max);
    reverse(arr,arr.length-1);
    ans.push(arr.length);
    arr.pop();
  }
  return ans;
};
function getMaxIndex(nums){
  let max = 0;
  for(let i = 0; i<nums.length;i++){
    if(nums[i] > nums[max]){
      max = i;
    }
  }
  return max;
}
// 反转
function reverse (arr,k){
  if(k < 1)return;
  let i = 0; let j =k;
  while(i<j){
    [arr[i],arr[j]] = [arr[j],arr[i]];
    i++;
    j--;
  }
}
// @lc code=end

