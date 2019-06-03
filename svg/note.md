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
    
    <circle r='40' fill='none'></circle>
    <circle r='30' fill='none'></circle>
    <circle r='20' fill='transparent'></circle>
    <circle r='10' fill='transparent'></circle>

  </g>
  </svg>
</div>
</body>
</html>
```
* 在元素中间加text内容
```svg
<div style='width:400px; height: 400px'>
  <svg xmlns="http://www.w3.org/2000/svg" width='100%' height='100%'>
    <g style="cursor:pointer">

      <circle cx='200' cy='200' r='50' fill='transparent' stroke='black' stroke-width='5'></circle>
      <text x='200' y='200' text-anchor='middle'>科鲁兹</text>
      <!-- text-anchor水平居中 -->

    </g>
  </svg>
</div>
```

* 在元素之中添加图片
```svg
<div style='width:400px; height: 400px'>
  <svg xmlns="http://www.w3.org/2000/svg" width='100%' height='100%'>
    <g style="cursor:pointer">

      <image x='200' y='200' width='100' height='103' xlink:href='img/main.png'></image>
      <text x='200' y='200' text-anchor='middle'>科鲁兹</text>

    </g>
  </svg>
</div>
```
* 绘制直线段：line
*但是多个直线拼接的line不建议，因为直线之间会有空隙*
*多个直线段用polyline*
 
* 绘制折线
```svg
  <svg xmlns="http://www.w3.org/2000/svg" width='100%' height='100%'>
    <polyline points='50 50 200 300 230 300 250 200' fill='none' stroke='black' stroke-width='5'>
  </svg>
   <!-- polyline是不闭合的曲线 -->
```

```svg
  <svg xmlns="http://www.w3.org/2000/svg" width='100%' height='100%'>
    <polygon points='50 50 200 300 230 300 250 200' fill='none' stroke='black' stroke-width='5'>
  </svg>
   <!-- polygon是闭合的曲线 -->
```

* path使用
*类似于ps中钢笔的作用*
    * d属性
        * M L **起始和终点的坐标**
        * Z **让线段自动闭合，不用设置参数**
        * H V **水平和垂直的**

        * C S Q T V是来描绘贝塞尔曲线的path命令（最好后期用任务驱动力来学习）

    * 大小写
    *相对于原点的坐标，即线段长度*

* 如果想在html命令中实现复杂的svg绘图，可以现在illustrator中画好一个svg然后导出其path代码 *B站收藏过一个示例视频，链接[在此](https://www.bilibili.com/video/av26753050)* 

![svg结合illustrator如图所示](..\static\6.2.1.png)

* 后续学习如下：
