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

## 几何体对象的两种表示方法
* Geometry ：顶点用一个对象表示
  * 举例：let p = new THREE.Vector3(50,0,0)
    geometry.vertices.push(p)
* BufferGeometry：顶点数据用类型化数组集中表示
  * 举例：let vertices = new Float32Array([0,0,0,30,0,0,0,0,30])
    geometry.attributes.position = new THREE.BufferAttribute(vertices,3)

## 定义顶点颜色
```js
let color1 = new THREE.Color(0x0000ff)

geometry.colors.push(color1)
```

## 定义几何体的三角面
通过Face3来定义几何体的三角面
```js
var geometry = new THREE.Geometry(); //声明一个几何体对象Geometry

    var p1 = new THREE.Vector3(0, 0, 0); //顶点1坐标
    var p2 = new THREE.Vector3(0, 100, 0); //顶点2坐标
    var p3 = new THREE.Vector3(50, 0, 0); //顶点3坐标
    var p4 = new THREE.Vector3(0, 0, 100); //顶点4坐标
    //顶点坐标添加到geometry对象
    geometry.vertices.push(p1, p2, p3,p4);

    // Face3构造函数创建一个三角面
    var face1 = new THREE.Face3(0, 1, 2);

    geometry.faces.push(face1);
```

(一般法向量是定义光线的参数，没有的话不太行)

##  Face3
法向量有两种表示方式
* vertexNormals  网格面三个顶点的法向量
* normal 直接一次性设置

yanse也有两种表示形式
* vertexColor
* color 同上

## 几何体的变换
平移：.translate()
缩放：.scale()
旋转：.rotate()

## 克隆和复制
* 克隆：
  let newmesh = mesh.copy()
  克隆是把整个对象原模原样的复制，返回一个新的对象
* 复制
  mesh2.copy(mesh1)
  mesh2复制mesh1的位置，旋转，矩阵等属性（不包含geometry和material属性）

## Group()
let group = new THREE.Group()

group.add(group1)
group.translateY(0.05)

## 对象的命名
let sphere = new THREE.Sphere(50,1,1,1)
sphere.name = '脑壳'

## 对象的遍历
group.traverse(obj=>{
    log(obj)
})

```js
 // 遍历场景对象scene  obj：每次遍历的对象
    scene.traverse(function(obj) {
      if (obj.type === "Group") {
        console.log(obj.name);
      }
      if (obj.type === "Mesh") {
        console.log('  ' + obj.name);
        obj.material.color.set(0xffff00);
      }
      if (obj.name === "左眼" | obj.name === "右眼") {
        obj.material.color.set(0x000000)
      }
      打印id属性
      console.log(obj.id);
      打印该对象的父对象
      console.log(obj.parent);
      打印该对象的子对象
      console.log(obj.children);
    })
```

## 返回世界坐标
.getWorldPosition()
```js
scene.updateMatrixWorld(true);
    var worldPosition = new THREE.Vector3();
    mesh.getWorldPosition(worldPosition)
    console.log('世界坐标',worldPosition);
    console.log('本地坐标',mesh.position);
```

## Geometry ， BufferGeometry
* Geometry
  * Geometry.vertices
  * Geometry.faces
* BufferGeometry
  * BufferGeometry.attributes.position
  * BufferGeometry.index

## ShapeGeometry
根据点来绘制面

## 精灵模型
不管怎么旋转模型，正面永远朝着相机
精灵模型就是一个平面 的网格模型

## 骨骼模型

*********
# 实际经验
* 有两个位置必须设定：
  * 点光源的位置
  * 相机的位置

## 投影

并不是所有灯光都能引起阴影
这4种可以：DirectionalLight、PointLight、RectAreaLight、SpotLight

并不是所有材质都可以接收引起阴影
我也没全部试过，试过可以的有：MeshLambertMaterialheTHREE.PhongMaterial

## group的添加顺序
虽然不知道为什么，但是记下来
以便下次使用
```js

  scene.add(newGroup)
  group2.add(newGroup)
```