# Print Binary Tree

使用一个m * n 的2D数组打印一个二叉树，遵循下面规则:

1. 行宽度应该等于给定二叉树的树高
2. 列数应该总为奇数
3. 树的根节点应该是第一行的中间位置。根几点所处的行与列应该将这个剩余空间分成两部分(左下部分和右下部分)。你应该打印左子树在左下部分，右子树在右下部分。左下部分和右下部分规模应该一致。如果一个子树为空而另一个子树不为空，你不需要打印不存在的子树但是仍然应该同另一边一样为不存的子树预留空间，然而，如果两棵子树都为空，你就不应该为其预留空间。
4. 每个不使用的空间应该为空字符串""。
5. 打印子树也因该遵循以下规则。

例1:

```
Input:
     1
    /
   2
Output:
[["", "1", ""],
 ["2", "", ""]]
```

例2:

```
Input:
     1
    / \
   2   3
    \
     4
Output:
[["", "", "", "1", "", "", ""],
 ["", "2", "", "", "", "3", ""],
 ["", "", "4", "", "", "", ""]]
```

例3:

```
Input:
      1
     / \
    2   5
   /
  3
 /
4
Output:

[["",  "",  "", "",  "", "", "", "1", "",  "",  "",  "",  "", "", ""]
 ["",  "",  "", "2", "", "", "", "",  "",  "",  "",  "5", "", "", ""]
 ["",  "3", "", "",  "", "", "", "",  "",  "",  "",  "",  "", "", ""]
 ["4", "",  "", "",  "", "", "", "",  "",  "",  "",  "",  "", "", ""]]
```

注意:

二叉树的高度范围在[0,10]