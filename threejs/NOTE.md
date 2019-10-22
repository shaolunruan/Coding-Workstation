threejs学习笔记(一)
===
***
webGl比较底层，语言写起来非常的晦涩难懂，就算学会了也很难运用到实际的操作中。所以生成了threejs的API库，让我们这些智商不高的人使用

其他的webGL框架：
* babylonjs 偏向于游戏的物理引擎
* playcanvas 偏向于游戏 有一套不错的可视化编程工具、
* Cesium 纯粹的地图引擎

threejs三大件：
* 场景scene
  * 物体 object
    * 材质
    * 结构
* 相机camera
* 渲染器 renderer

坐标系：是右手坐标系，食指是y轴，朝上
旋转：右手螺旋定则，大拇指朝着坐标轴方向 旋转一周表示6.28，

AxisHelper

让物体动起来的两种方式：
* 移动物体
* 移动相机

js监测性能的library：stats.js

three实现简便的一个library：tween.js
```js
//实现让x的坐标不断移动（从在3秒内从0到400）
function initTewwn(){
    new TWEEN.Tween(camera.position)
    .to({x:400},3000).repeat(Infinity).start()
}
```

这个库还挺好的，建议没事的时候自己看看官方的demo

three中的相机：
* 正交投影相机
* 透视投影相机

BufferGeometry是一个基类，和SphereByfferGeometry的区别就是没有attribute等属性值。
可以通过添加的方式，设置基类的点，从而画出 图形
```js
var geometry = new THREE.BufferGeometry(); //创建一个Buffer类型几何体对象
//类型数组创建顶点数据
var vertices = new Float32Array([
  0, 0, 0, //顶点1坐标
  50, 0, 0, //顶点2坐标
  0, 100, 0, //顶点3坐标
  0, 0, 10, //顶点4坐标
  0, 0, 100, //顶点5坐标
  50, 0, 10, //顶点6坐标
]);
// 创建属性缓冲区对象
var attribue = new THREE.BufferAttribute(vertices, 3); //3个为一组，表示一个顶点的xyz坐标
// 设置几何体attributes属性的位置属性
geometry.attributes.position = attribue;
```

## 颜色插值计算
vertexColor：

## 顶点法向量
geometry.attribute.position
geometry.attribute.color
geometry.attribute.normal

面的法向量主要进行颜色的计算


