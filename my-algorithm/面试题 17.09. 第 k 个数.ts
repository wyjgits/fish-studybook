/* 
有些数的素因子只有 3，5，7，请设计一个算法找出第 k 个数。注意，不是必须有这些素因子，而是必须不包含其他的素因子。例如，前几个数按顺序应该是 1，3，5，7，9，15，21。
输入: k = 5

输出: 9
*/
function getKthMagicNumber(k: number): number {
  let arr = []
  arr.push(1);
  let p3 =0,p5=0,p7=0;
  while(arr.length<k){
    let p3v = 3 * arr[p3];
    let p5v = 5 * arr[p5];
    let p7v = 7 * arr[p7];
    let ans = Math.min(p3v, p5v, p7v);
    if(ans === p3v) p3++
    if(ans === p5v) p5++
    if(ans === p7v) p7++
    arr.push(ans)
  }
  return arr[k-1]
};