# Trim a Binary Search Tree

给定一棵二叉树和最低、最高的范围边界L与R，削减这棵树使得所有的节点在范围[L, R]，其中(R >= L).你可能需要改变树的根节点，使得结果返回修建后二叉树的新的根节点。

例1:
```
输入:
    1
   / \
  0   2

  L = 1
  R = 2

输出:
    1
      \
       2
```

例2:

```
输入:
    3
   / \
  0   4
   \
    2
   /
  1

  L = 1
  R = 3

输出:
      3
     /
   2
  /
 1
```