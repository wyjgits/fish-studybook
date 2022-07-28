/*
 * @lc app=leetcode.cn id=662 lang=typescript
 *
 * [662] 二叉树最大宽度
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

function widthOfBinaryTree(root: TreeNode | null): number {
  let maxWidth = 0;
    if (root) {
        let queue = [root];
        let xs = [1];
        while (queue.length > 0) {
            let size = queue.length;
            let left, right;
            if (size === 1) {
                xs = [1];
            }
            for (let i = 0; i < size; i++) {
                let node = queue.shift();
                let x = xs.shift();
                if (i === 0) {
                    left = x;
                }
                if (i === size - 1) {
                    right = x;
                }
                if (node.left) {
                    queue.push(node.left);
                    xs.push(x * 2);
                }
                if (node.right) {
                    queue.push(node.right);
                    xs.push(x * 2 + 1)
                }
            }
            maxWidth = Math.max(maxWidth, right - left + 1);
        }
    }
    return maxWidth;
};
// @lc code=end

