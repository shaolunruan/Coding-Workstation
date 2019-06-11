# JS一些细枝末节的东西
***

>JS之前在用的时候只是只要用于构造数组，vue初阶以及。。不对，好像就用到了这两种东西，所以对于你想主要用来开展你的职业生涯 的语言来说，你所掌握的这些东西还远远不够，所以开设此专题，来系统的学习一些JS的用法，原理和实践。同时也为之后系统的学习D3来做一个铺垫。

## this到底是什么

解析器在调用函数，每次都会像函数内部传入一个隐含的参数this，this只想的是一个对象，
这个对象成为函数执行的上下文对象
根据函数调用方式的不同，this会指向不同的对象：
    1. 以函数的形式调用时，this永远都是window
   比如直接调用fun(),系统传入参数Object Window
    2. 以方法的形式调用时，this就是调用方法的那个对象
   比如调用obj.name,name是一个fun(),this就指向的是obj 

## 用工厂的方法批量构建对象
```js
function createPerson(name, age, gender){
    let obj = new Object();
    //向对象中添加属性
    obj.name = name;
    obj.age = age;
    obj.gender = gender;

}
```

## 
  