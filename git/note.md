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
***
# 回到过去

![git的工作图示](..\static\5.26.1.png 'git的工作图示')
* 在我更改了一些个文件夹的名称后(例：tex=>TeX)，执行了
```shell
git reset HEAD~
```
回滚到上一个提交的状态
这是，我的vscode目录中出现了很多删除并且未提交的更改
然后我在执行暂存和提交，这些更改的提示也都消失了
代码如下：
```shell
$ git reset HEAD~
Unstaged changes after reset:
D       git note/note.md
D       markdown note/note_chars.md
D       markdown note/note_paragraph.md
D       markdown note/random.md
D       tex note/note.md
D       tex note/test.aux
D       tex note/test.log
D       tex note/test.synctex.gz
D       tex note/test.tex

Administrator@8V9T9BQB4IX6XY1 MINGW64 ~/Desktop/workspace (master)
$ git add .

Administrator@8V9T9BQB4IX6XY1 MINGW64 ~/Desktop/workspace (master)
$ git commit -m '20.26'
[master 959f785] 20.26
 10 files changed, 0 insertions(+), 0 deletions(-)
 rename {tex note => TeX}/note.md (100%)
 rename {tex note => TeX}/test.aux (100%)
 rename {tex note => TeX}/test.log (100%)
 rename {tex note => TeX}/test.synctex.gz (100%)
 rename {tex note => TeX}/test.tex (100%)
 rename {git note => git}/note.md (100%)
 rename {markdown note => markdown}/note_chars.md (100%)
 rename {markdown note => markdown}/note_paragraph.md (100%)
 rename {markdown note => markdown}/random.md (100%)
 create mode 100644 static/5.26.1.png

```
**说明这种方法可以使我们的操作回滚到上一个提交之前的状态，并且还可以再前进**

* 总结：
<br>
  1. 移动HEAD的指向
  回滚只修改了暂存区的代码，不修改工作区域的代码
  ```shell
  git reset --soft HEAD~
  ```
  *比如做了一次错误的提交*
  
  2. 将暂存区域还原到工作目录 
  
  ```shell
  git reset --hard HEAD~
  ```
  *回滚修改了暂存区和工作区域的代码*
  *这种操作很危险*

  3. 将快照回滚到暂存区域
  ```shell
  git reset HEAD~
  ```

**所以，想滚到那个版本，滚到前面还是后面，可以加上指定的版本号ID，比如：**
```shell
$ git log
commit 959f7851f07756c5ddc6ecbc3a0bf7e0600310bd (HEAD -> master)
Author: admin <1072458853@qq.com>
Date:   Sun May 26 20:27:08 2019 +0800

    20.26

commit 93245d8a7c0227f2949ce54838d5d42b3614a96c
Author: admin <1072458853@qq.com>
Date:   Sun May 26 19:37:53 2019 +0800

    5.26.2

commit 9d82912634c4520ee6e623337ae732d4c22b64e7
Author: admin <1072458853@qq.com>
Date:   Sun May 26 19:19:17 2019 +0800

    添加123.txt.txt

commit 2f6252989998c89c91d95c538f9f5b69319b7db0
Author: admin <1072458853@qq.com>
Date:   Sun May 26 19:12:57 2019 +0800

    5.26.1

%想回滚到版本号为2f62529...的版本%
$ git reset 2f625298
%想回滚到版本号为2f62529...的版本%

```
***
## 版本对比
