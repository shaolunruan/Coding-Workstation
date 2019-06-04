* \n---\n是默认的水平追加
\n----\n是指定的在该页的竖直追加
* \<!-- .slide: data-background="https://raw.githubusercontent.com/shaolun-Ryan/Coding-Workstation/master/static/6.4.2.jpg" -->是添加背景图片
* reveal-md slides.md --print slides.pdf
  是输出为pdf

* \---
theme: solarized
revealOptions:
    transition: 'fade'
presentation:
  width: 800
  height: 600 
  theme: white.css
\---
**是在.md文件头部配置slide的部分**

* reveal-md presentation.md --print slides.pdf
输出为pdf图片

* 想要切换样式,用如下命令启动slide
```shell
reveal-md presentation.md --theme ./Trivial_file\reveal.js\css\theme\blood.css
```

*  
```html
 <img src="https://raw.githubusercontent.com/shaolun-Ryan/Coding-Workstation/master/static/1280px-Markdown-mark.svg.png" height = "100" alt="图片名称" />
 ```
插入图片