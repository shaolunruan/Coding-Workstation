TeX学习笔记
===

***
## Get started

### TeX结构

```latex

% 导言区
\documentclass{article}%book,report,letter

\title{My First Document}
\author{Shaolun Ruan}
\date{\today}

% 正文区(文稿区)
\begin{document}
	\maketitle
	
	Hello World!
	
	Let $f(x)$ be defined by the formula
	$$f(x)=3^2+2x+1$$ which is a polynomial of degree 2.
	
\end{document}
```
### 撰写中文

* 可以在导入宏包的时候使用
```latex
\documentclass{ctexart}%ctexbook,ctexrep
```

* 使用**cmd**语句输入*texdoc lshort-zh*来查看**latex中文手册**

### 字体控制

1. 字体族设置
```latex

% 导言区
	%字体族设置(罗马字体、无衬线字体、打字机字体)
	\textrm{Roman Family} \textsf{Sans Serif Family} \texttt{Typewriter Family}
	
	{\rmfamily Roman Family} {\sffamily Sans Serif Family} {\ttfamily Typewriter Family}
```
实现的效果如下
![占位文字](..\static\微信截图_20190523170328.png "字体族设置")

2. 字体系列设置
```latex
    %字体系列设置(粗细，宽度等)
    \mdseries Medium Series
    
    \bfseries Boldface Series
```
实现的效果如下
![占位文字](..\static\5.23.2.png "字体族设置")

3. 字体形状设置
```latex
	%字体形状设置(直立、斜体、伪斜体、小型大写)
	{\upshape Upright Shape}
	
	{\itshape Italic Shape}
	
	{\slshape Slanted Shape}
	
	{\scshape Small Caps Shape}
```
实现的效果如下
![占位文字](..\static\5.23.3.png "字体族设置")

4. 字体大小设置
```latex
    \documentclass[12pt]{article}%字体在这里设置

	%字体大小
	{\tiny Hello}\\
	{\scriptsize Hello}\\
	{\footnotesize Hello}\\
	{\small Hello}\\
	{\normalsize Hello}\\
	{\large Hello}\\
	{\Large Hello}\\
	{\LARGE Hello}\\
	{\huge Hello}\\
	{\Huge Hello}
```
实现的效果如下
![占位文字](..\static\5.23.5.png "字体族设置")
