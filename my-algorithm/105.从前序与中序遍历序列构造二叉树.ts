/*
 * @lc app=leetcode.cn id=105 lang=typescript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  let map = new Map();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }
  const helper = function (pStart, pEnd, iStart, iEnd) {
    if (pStart > pEnd) return null;
    let rootVal = preorder[pStart];
    let root = new TreeNode(rootVal);
    let mid = map.get(rootVal);
    let letfNum = mid - iStart;
    root.left = helper(pStart + 1, pStart + letfNum, iStart, mid - 1);
    root.right = helper(pStart + letfNum + 1, pEnd, mid + 1, iEnd); 
    return root;
  }
  return helper(0, preorder.length - 1, 0, inorder.length - 1);

};
// @lc code=end

