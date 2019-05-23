TeX学习笔记
===

***
## Get started

### TeX结构

```latex
% 导言区
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
