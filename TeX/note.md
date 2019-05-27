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
![占位文字](https://raw.githubusercontent.com/shaolun-Ryan/Coding-Workstation/master/static/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20190523170328.png "字体族设置")

2. 字体系列设置
```latex
    %字体系列设置(粗细，宽度等)
    \mdseries Medium Series
    
    \bfseries Boldface Series
```
实现的效果如下
![占位文字](https://raw.githubusercontent.com/shaolun-Ryan/Coding-Workstation/master/static/5.23.2.png "字体族设置")

3. 字体形状设置
```latex
	%字体形状设置(直立、斜体、伪斜体、小型大写)
	{\upshape Upright Shape}
	
	{\itshape Italic Shape}
	
	{\slshape Slanted Shape}
	
	{\scshape Small Caps Shape}
```
实现的效果如下
![占位文字](https://raw.githubusercontent.com/shaolun-Ryan/Coding-Workstation/master/static/5.23.3.png "字体族设置")

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
![占位文字](https://raw.githubusercontent.com/shaolun-Ryan/Coding-Workstation/master/static/5.24.5.png "字体族设置")

***

## 构建引言
* 如下方法实现了对文章基本结构的撰写
* 注：**\\** 符号就是产生换行，并不产生新的段落
```latex
\documentclass{article}

\usepackage{ctex}

% 正文区(文稿区)
\begin{document}
	\section{引言}
	\section{实验方法}
	\subsection{数据}
	\subsection{图表}
	\subsection{结果分析}
	\subsubsection{情况一}
	\subsubsection{情况二}
	\subsubsection{情况三}
	\section{实验结果}
	\section{结论}
	\section{致谢}
\end{document}
```
>*与本文内容无关，记录下今天看到说的很好的两句话：
真正处于顶端的人往往都是最虚心求教的
事别拖，人别作，话不多…*

* 另一种方法，写中文时用ctex的宏包来引用，然后在配置段落里用全局配置来进行设置，例如：

```latex
\documentclass{ctexart}

%\usepackage{ctex}

%===========设置标题的格式==========
\ctexset{
	section = {
		format+ = \zihao{-4} \heiti \raggedright,
		name = {,、},
		number = \chinese{section},
		beforeskip = 1.0ex plus 0.2ex minus 0.2ex,
		afterskip = 1.0ex plus 0.2ex minus 0.2ex,
		aftername = \hspace{0pt}
	},
	subsection = {
		format+ = \zihao{5} \heiti \raggedright,
		name = {,、},
		number = \arabic{subsection},
		beforeskip = 1.0ex plus 0.2ex minus 0.2ex,
		afterskip = 1.0ex plus 0.2ex minus 0.2ex,
		aftername = \hspace{0pt}
	}
}
% 正文区(文稿区)
\begin{document}
    \tableofcontents
    %生成文档的目录
	\section{引言}
	\section{实验方法}
	\subsection{数据}
	\subsection{图表}
	\subsection{结果分析}
	\subsubsection{情况一}
	\subsubsection{情况二}
	\subsubsection{情况三}
	\section{实验结果}
	\section{结论}
	\section{致谢}
\end{document}
```
***
## LaTeX符号
1. 空白符号
    * 空行分段，多个空行等于一个空行
    * 自动缩进， 不可以用空格代替
    * 多个空格处理为一个空格
1. 引号
    * ` 是左单引号，' 是右单引号
    * `` 是左双引号，'' 是右双引号
1. 连字符
    * - 短
    * -- 中
    * --- 长

1. *其他的字符如果需要用到的话可以去LaTeX手册去查看*
****
## 插入图片
>导言区:\usepackage{graphicx}
语法：\includegraphics[选项]{文件名}
格式：ESP,PDF,PNG,JEPG,BMP
```latex
\documentclass{ctexart}

%\usepackage{ctex}
\usepackage{graphicx}
\graphicspath{{figures/}}%设置图片的分类路径
%===========设置标题的格式==========

% 正文区(文稿区)
\begin{document}
	\LaTeX{}中的插图
	\includegraphics{123}
\end{document}
```

```latex
%加入图片的可选参数
\includegraphics[scale=0.3]{123}%scale为缩放因子
\includegraphics[height=2cm]{123}
\includegraphics[width=2cm]{123}
\includegraphics[height=0.2\textwidth]{123}%版型文本为0.2倍的图像高度
\includegraphics[width=0.2\textwidth]{123}
```
* *关于更多插入图片的操作，可以打开命令为**texdoc graphicx**文档进行查看*
***
表格制作
===
```latex
\documentclass{ctexart}

%\usepackage{ctex}
\usepackage{graphicx}
\graphicspath{{figures/}}
%===========设置标题的格式==========

% 正文区(文稿区)
\begin{document}
    \begin{tabular}{|l||c|c|c|r}
		\hline
		姓名&语文&数学&外语&备注\\
		\hline \hline
		张三&87&100&93&优秀\\
		\hline
		李四&75&64&52&补考另行通知\\
		\hline
		王二&80&82&78&\\
		\hline
	\end{tabular}
\end{document}
```
实现效果如下：
![占位文字](https://raw.githubusercontent.com/shaolun-Ryan/Coding-Workstation/master/static/5.24.1.png "字体族设置")

### 操作：

```latex
···
%用p{1.5cm}指定列的宽度，使超过部分换行
\begin{document}
    \begin{tabular}{|l||c|c|c|p{1.5cm}|}
···
```
* 还可以实现更多样式的表格
    * **texdoc booktab**命令实现三线表
    * **texdoc longtab**命令实现跨页长表格
    * **texdoc tabu**综合表格宏包

##### 对latex中图片和图表的管理，可以用到浮动体进行管理
比如讲图片标签放入*figure*中，将图表内容放入*table*中
同时在浮动体中加入\centering对浮动体进行管理，比如：
```latex
\documentclass{ctexart}

%\usepackage{ctex}
\usepackage{graphicx}
\graphicspath{{figures/}}
%===========设置标题的格式==========

% 正文区(文稿区)
\begin{document}
	\begin{table}
		\centering
		\begin{tabular}{|l||c|c|c|p{1.5cm}|}
		\hline
		姓名&语文&数学&外语&备注\\
		\hline \hline
		张三&87&100&93&优秀\\
		\hline
		李四&75&64&52&补考另行通知\\
		\hline
		王二&80&82&78&\\
		\hline
		\end{tabular}
	\end{table}
\end{document}
```
###### 在浮动体中加入\caption命令对图片设置标题
```latex
\begin{document}
	\begin{figure}
		\centering
		\includegraphics[height=0.5\textwidth]{5241}
		\caption{\TeX 我喜欢的一门语言 陪伴了我的成长}
	\end{figure}
```
效果如下：
![占位文字](https://raw.githubusercontent.com/shaolun-Ryan/Coding-Workstation/master/static/5.24.2.png "字体族设置")
###### 设置图片的引用：
```latex
\begin{document}
	我喜欢的一门语言见图\ref{fig-js}
	\begin{figure}[htbp]
		\centering
		\includegraphics[height=0.5\textwidth]{5241}
		\caption{\TeX 我喜欢的一门语言 陪伴了我的成长}\label{fig-js}
	\end{figure}
```
效果如下：
![占位文字](https://raw.githubusercontent.com/shaolun-Ryan/Coding-Workstation/master/static/5.24.3.png "字体族设置")
***
添加数学公式
===
* 用 *x^{20}* 作为上标的书写
* 用 *x_{20}* 作为下标的书写
* 用美元符号 *$* 或者 *\begin{math}* 实现转化为数学模式
*  *\times* 实现乘号 
* 常用到数学公式的符号 *\log* *\alpha* *\beta* *\gamma* *\sin* 等符号
*  *\sqrt[2]{3}* 实现根式
*  *\frac{3}{4}* 实现分式 
* *双美元符号* **$$**  或者 *\begin{displaymath}* 实现行间公式
* 自动编号公式 *\begin{equation}* 环境
* **矩阵和多行公式的排版不在赘述，收藏于[ *B站latex中文教程* ](https://www.bilibili.com/video/av16002978/?p=12)**

***
排版参考文献
===
话不多说，直接上例子：
```latex
	感谢这一年陪我度过我人生最艰难最关键也是最难忘的几个人，\emph{电子科技大学数据可视化实验室}\cite{article1}是最胖的！

	\begin{thebibliography}{99}
		\bibitem{article1}Jiansu Pu, Shaolun Ruan, Jingwen Zhang, Jiansu Pu
		\bibitem{article2}Qiang Guan, Jingwen Zhang, Jiansu Pu
		\bibitem{article3}Yuwei Zhang, Jingwen Zhang, Jiansu Pu
		\bibitem{article4}Tingting Zhang, Jingwen Zhang, Jiansu Pu
		
	\end{thebibliography}
```
效果如下：
![占位文字](https://raw.githubusercontent.com/shaolun-Ryan/Coding-Workstation/master/static/5.24.5.png "字体族设置")

* **如果想实现文献文件的单独编写和多次引用，或者想知道一些BibTeX和Zotero的操作，请参阅[ *B站latex中文教程——参考文献* ](https://www.bilibili.com/video/av16002978/?p=13)**
* **如果想了解关于Biber和BibLaTeX，请参阅[ *B站latex中文教程——BibLaTeX* ](https://www.bilibili.com/video/av16002978/?p=14)**

***
自定义命令
===
* 比如用 *\newcommand\PRC{People's Republic of \emph{China}}* 实现对PRC的定义，可以直接在下文中引用
* 还可以给自定义命令设置参数，比如：
```latex
\newcommand\loves[2]{#1 喜欢 #2}

%正文区
\begin{document}
    \love{小猫}{鱼}
```
* **还可以对环境进行重定义，请参阅[ *B站latex中文教程——newenvironment* ](https://www.bilibili.com/video/av16002978/?p=15)**
<br>
<br>
<center><font color='OrangeRed' size=72>完结撒花!</font><center>

<br>
<br>
<br>
<br>

***
[CSDN-中文字号和标准对照表](https://blog.csdn.net/xiazdong/article/details/8892070)