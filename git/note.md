Git&Github手册
===
***
## Git的安装
***
## Git的使用文档

* 创建本地版本库
```shell
git init
```

* 向本地版本库添加文件(from 工作目录)
>本地版本库也叫暂存区

```shell
//提交到暂存区

git add README.md
//或者添加全部
git add .

//添加说明注释  
git commit -m 'add README.md'
```

```shell
git status%查看工作状态%
```
```shell
%一些操作后的状态%
%在工作目录添加了一个新文件123.txt，显示如下，其中文件名为红色%
$ git status
On branch master
Your branch is up to date with 'origin/master'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        123.txt.txt

nothing added to commit but untracked files present (use "git add" to track)
```
```shell
$ git add 123.txt.txt


$ git status
On branch master
Your branch is up to date with 'origin/master'.

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        new file:   123.txt.txt
```

```shell
$ git commit -m '添加123.txt.txt'
[master 9d82912] 添加123.txt.txt
 1 file changed, 1 insertion(+)
 create mode 100644 123.txt.txt
```

```shell
%在修改了123.txt.txt之后，查看状态%

$ git status
On branch master
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   123.txt.txt

no changes added to commit (use "git add" and/or "git commit -a")
```
上面的结果显示，*git add \<file>* 提交修改
或者用*git checkout -- \<file>* 将暂存区的代码覆盖掉你这次的修改更新

```shell
%查看提交记录和更改状态%

$ git log
commit 9d82912634c4520ee6e623337ae732d4c22b64e7 (HEAD -> master)
Author: admin <1072458853@qq.com>
Date:   Sun May 26 19:19:17 2019 +0800

    添加123.txt.txt

commit 2f6252989998c89c91d95c538f9f5b69319b7db0 (origin/master)
Author: admin <1072458853@qq.com>
Date:   Sun May 26 19:12:57 2019 +0800

    5.26.1

commit 39a587e74fa4fcd7af180d88b00ae46fc50079c0
Author: admin <1072458853@qq.com>
Date:   Sat May 25 22:20:41 2019 +0800

    5.25.4

commit 1f28495fad15c65188147e0a990a5c3c56070376
Author: admin <1072458853@qq.com>
Date:   Sat May 25 20:47:22 2019 +0800

    5.25.2

```