/*
 * @lc app=leetcode.cn id=107 lang=typescript
 *
 * [107] 二叉树的层序遍历 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrderBottom(root: TreeNode | null): number[][] {
  function helper(list, index, node) {
    if (!node) return list;
    const res = list[index] || [];
    res.push(node.val);
    list[index] = res;

    helper(list, index + 1, node.left);
    helper(list, index + 1, node.right);
  }

  const result = [];

  helper(result, 0, root);

  return result.reverse();
};
// @lc code=end

