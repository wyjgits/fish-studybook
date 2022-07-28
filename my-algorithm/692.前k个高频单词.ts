/*
 * @lc app=leetcode.cn id=692 lang=typescript
 *
 * [692] 前K个高频单词
 */

// @lc code=start
function topKFrequent(words: string[], k: number): string[] {
  const cnt = new Map();
    for (const word of words) {
        cnt.set(word, (cnt.get(word) || 0) + 1);
    }
    const rec = [];
    for (const entry of cnt.keys()) {
        rec.push(entry);
    }
    rec.sort((word1, word2) => {
        return cnt.get(word1) === cnt.get(word2) ? word1.localeCompare(word2) : cnt.get(word2) - cnt.get(word1);
    })
    return rec.slice(0, k);

};
// @lc code=end

