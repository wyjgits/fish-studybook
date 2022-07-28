/*
 * @lc app=leetcode.cn id=968 lang=typescript
 *
 * [968] 监控二叉树
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

function minCameraCover(root: TreeNode | null): number {
  let result = 0;
    const traversal = function(cur) {
        if(cur === null) {
            return 2;
        }

        const left = traversal(cur.left);
        const right = traversal(cur.right);

        if(left === 2 && right === 2) {
            return 0;
        }

        if(left === 0 || right === 0) {
            result++;
            return 1;
        }

        if(left === 1 || right === 1) {
            return 2;
        }

        return -1;
    }

    if(traversal(root) === 0) {
        result++;
    }

    return result;
    
};
// @lc code=end

