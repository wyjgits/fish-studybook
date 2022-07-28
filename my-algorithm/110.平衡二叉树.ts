/*
 * @lc app=leetcode.cn id=110 lang=typescript
 *
 * [110] 平衡二叉树
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

 var isBalanced = function(root) {
  const res = {
      isBalancedTree: true
  }
  dfs(root, res);
  return res.isBalancedTree;
};


var maxDepth = function(root) {
  if(root == null) return 0;
  return Math.max(maxDepth(root.left),maxDepth(root.right)) + 1;
}


var dfs = function(root,res) {
  if(root == null) return;
  if(Math.abs(maxDepth(root.left) - maxDepth(root.right)) > 1) {
      return res.isBalancedTree = false;
  }
  dfs(root.left,res);
  dfs(root.right,res);
}

// @lc code=end

