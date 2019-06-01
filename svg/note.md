SVG学习笔记
===
***
### svg中的基本图形
* 圆形
    * cx， cy 圆心坐标
    * r 圆形半径
    * stroke 圆形边框——颜色
    * stroke-width 圆形边框-半径
    * fill 填色
    * style
        * fill
        * stroke
        * stroke-width
        * *效果是完全一样的*
    
    * 矩形
        * width 矩形长
        * height 矩形高
        * x， y矩形位置
        * rx， ry矩形圆角的半径
    
    * 一条线
        * x1,y1  x2,y2线段两个端点的值
        * stroke 路径颜色
        * stroke-width粗细
        * stroke-opacity 线段透明度
    * ellipse 椭圆
    * polyine 折线
    * ploygon多边形
    * path 路径 

### <g>标签
* 是一个容器（分组）的标签，用来组合元素的
```svg
<?xml version="1.0"?>
<!DOCTYPE html>
<html>
<head></head>
<body>
<div style='width:400px; height: 400px'>
  <svg xmlns="http://www.w3.org/2000/svg" width='100%' height='100%'>
    <g transform='translate(200,200)' stroke='black' stroke-width='5'><!-- transform='translate(200,200)用来转移g容器包裹的DOM元素的位置 -->
    
    <circle r='40' fill='transparent'></circle>
    <circle r='30' fill='transparent'></circle>
    <circle r='20' fill='transparent'></circle>
    <circle r='10' fill='transparent'></circle>

  </g>
  </svg>
</div>
</body>
</html>
```
* 在元素中间加内容

