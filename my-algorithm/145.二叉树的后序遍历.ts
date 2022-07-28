/*
 * @lc app=leetcode.cn id=145 lang=typescript
 *
 * [145] 二叉树的后序遍历
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

var postorderTraversal  = function (root) {
  let res = [];
  if (!root) return res;
  let stack = [root];
  while (stack.length) {
    root = stack.pop();
    res.unshift(root.val);
    if(root.left) stack.push(root.left);
    if(root.right) stack.push(root.right);
  }
  return res;

}
// @lc code=end

