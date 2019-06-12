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

## 原型prototype
我们所创建的每一个函数 ，解析器都会向函数中添加一个属性prototype
```js
console.log(Person.prototype)
//可以打印出来是一个Object
```
每个Person.prototype对应一个原型对象
当函数以普通函数调用时，prototype没有任何的意义
当以构造函数调用时， 可以通过__proto__访问
```js
//什么叫以构造函数调用呢？看下面的例子
function MyClass(){

}

var mc = new MyClass();
//这就叫构造函数创建的对象
```
普通函数调用时，直接用MyClass.prototype即可实现调用；
但是MyClass.prototype和mc.\_\_proto\_\_所指向的是一个东西；

原型对象就像一个公共区域，所有同一个类的实例都可以访问到这个原型对象
我们可以将对象中的共有内容，同一设置到原型对象中
举例：
```js
MyClass.prototype.a = 123

let mc = new MyClass();

console.log(mc.a)//123
//有点意思
```
一般的使用初级理解是用方法来实现的，几个完整的例子：
```js
function Person(name, age, gender){
    //向对象中添加属性
    this.name = name;
    this.age = age;
    this.gender = gender;
}

let obj1 = new Person('小明',12,'男')

let obj2 = new Person('小红',10,'女')

Person.prototype.sayName = function(){
    console.log('heello,this is'+this.name)
}

//调试
console.log(obj1.sayName)
console.log(obj2.sayName)

```

## 垃圾回收
当一个对象没有 任何的变量或者属性对他进行引用，我们将永远无法对其进行操作和引用
此时这种对象就是垃圾，这种对象过多会占用内存空间，导致内存变慢，所以必须进行清理
js中拥有自动的垃圾回收机制，自动销毁。
浏览器完成。
手动完成：
obj = null

## forEach
遍历数组除了传统的方法，js还有一个方法forEach
```js
let arr = [1,2,3,4,5,6,7,8,9]

arr.forEach((a)=>{//一个回调函数自变量
    console.log(a);//1,2,3,4,5,6,7,8,9
})
```
```js
let arr = [1,2,3,4,5,6,7,8,9]

arr.forEach((a,b)=>{//两个回调函数自变量
    console.log(a);/
// 1 0
// 2 1
// 3 2
// 4 3
// 5 4
// 6 5
// 7 6
// 8 7
// 9 8
})
```

## slice()和splice()操作数组

### slice()
```js
let arr = ['Tom','Jerry','Spark','Typhy']

let a = arr.slice(0,3)

console.log(a);
// [ 'Tom', 'Jerry', 'Spark' ]
```

```js
//表示倒数
let arr = ['Tom','Jerry','Spark','Typhy']

let a = arr.slice(1,-1)

console.log(a);
// [ 'Jerry', 'Spark' ]
```

### splice()
>删除并添加新元素

####删除元素
```js
let arr = ['Tom','Jerry','Spark','Typhy']

arr.splice(0,2)

console.log(arr);
// [ 'Spark', 'Typhy' ]

//splice()直接将原数组删除元素并返回
```

```js
let arr = ['Tom','Jerry','Spark','Typhy']

let a = arr.splice(0,2)

console.log(a);
// [ 'Tom', 'Jerry' ]

//arr.splice()是要删除的元素
```

* 参数表示：
    * 第一个：删除开始的元素索引
    * 第二个：删除的数量
    * 第三个及以后：要添加的元素，添加到第一个参数（开始位置）的前面
* 功能：
    * 删除元素
    * 替换元素
    * 直接添加元素（删除0个）

## 数组方法

### concat()
>连接两个或多个数组，并将新数组返回

不会对原数组产生影响

```js
let arr1 = ['Tom','Jerry','Spark','Typhy']

let arr2 = [123,456,789]

let arr = arr1.concat(arr2)

console.log(arr);
// [ 'Tom', 'Jerry', 'Spark', 'Typhy', 123, 456, 789 ]
```

### join()
>将数组转化为字符串，并用,连接
```js
let arr = ['Tom','Jerry','Spark','Typhy']

let result = arr.join()

console.log(result);
console.log(typeof result);

console.log(result[3]);
// Tom,Jerry,Spark,Typhy
// string
// ,
```

```js
let arr = ['Tom','Jerry','Spark','Typhy']

let result = arr.join('@')

console.log(result);
// Tom@Jerry@Spark@Typhy
```

### reverse()
>反转原数组的排序，第一个跑到最后一个

### sort()
>对数组中的元素进行排序，默认会以Unicode进行排序
```js
let set = ['e','b','c','a','d']

set.sort();

console.log(set);
// [ 'a', 'b', 'c', 'd', 'e' ]
```

```js
let set = [4,3,5,2,11]

set.sort();

console.log(set);
// [ 11, 2, 3, 4, 5 ]
//很不科学
```

```js
//自定义方案
let set = [5,2,3,11,45]

set.sort((a,b)=>{
    if(a>b){
    return 1;
    }else if(a<b){
        return -1;
    }else{
        return 0;
    }
});

console.log(set);
// [ 2, 3, 5, 11, 45 ]
```

## call和apply
