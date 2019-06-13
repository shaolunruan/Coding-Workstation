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
>函数对象中的方法，需要通过函数对象来调用

在调用call和apply时，可以将一个对象指定为第一个参数
此时这个对象将会成为函数执行时的this
```js
let obj = {};

function fun(){
    console.log(123)
}

// fun()
// fun.call(obj)
fun.apply(obj)//object Object
```

```js
let obj = {name:'Tom'};

function fun(){
    console.log(this.name)
}

fun.apply(obj)//'Tom'
```

## Date对象
如果直接使用构造函数new Date()创建一个Date对象，会成为当前的时间
```js
// 创建一个指定的时间对象
let d2 = new Date('12/03/2016 11:10:30')

console.log(d2)
//2016-12-03T03:10:30.000Z
```
### 一些Date方法

#### getDate()
返回Date对象的天数
```js
let d2 = new Date('12/03/2016 11:10:30')

console.log(d2.getDate())//12
```

#### getDay()
返回星期几
```js
let d = new Date();

console.log(d.getDay());//3
//0表示周日
```

同理：getMonth()获取Date对象的月份

#### getFullYear()
获取完整的Date对象的年份

#### getTime()
获取当前月份的时间戳
1970年到当前日期的毫秒数

##### 获取当前的时间戳
```js
console.log(Date.now());
```

## MAth()对象
Math和其他的对象不同，不是一个构造函数。
只是一个工具类，封装了数学相关的数学运算
```js
console.log(Math.PI);
// 3.141592653589793

//向上舍入
console.log(Math.ceil(3.51));//4
//向下舍入
console.log(Math.floor(3.51));//3

//取更大的那个值
console.log(Math.max(1,10));//10
//取更小的那个值
console.log(Math.min(1,10));//1

//生成0-1之间的随机数
console.log(Math.random())//0.15484978798

//把数四舍五入为最接近的整数
console.log(round(1.677))//2

```

## 包装类

JS中基本数据类型有：
String、Number、Boolean、Null、Undefined
引用数据类型有：
Object

在JS中为我们提供了三个包装类，可以将基本数据类型转化为对象：
String()
    -可以将基本数据类型转化为String对象
Number()
    -可以将。。转化为Number对象
Boolean
    -。。。转化为Boolean对象

```js
let num = new Number(3)

console.log(typeof num);//objec

let str = new String('hello')

console.log(typeof str);//objec
```

```js
num.name = '你好'
console.log(num.name)//'你好'
```
包装类是js底层用来处理用的方法，一般自己不用，仅做了解

## 字符串相关方法
str.length 可以用来获取字符串长度

字符串大部分方法不改变原数组

### 方法

```js
let str = "Hello Atguigu"


//charAt()
// 返回指定位置的字符
console.log(str.charAt(0));//H

//拿到一些icon图标（CodeCharts）
let result = String.fromCharCode(0x2692)

console.log(result);//⚒

//concat
//连接两个或多个字符串
//作用和+相同
let new = str.concat('你好')
console.log(new)

//indexOf()
//检索字符串
let str = "Hello Atguigu"

result = str.indexOf('H')

console.log(result)//0

//没有返回-1
//有的话返回第一次出现的位置
let str = "Hello Atguigu"

result = str.indexOf('H',1)

console.log(result)//6
//可以指定开始的=查找的位置


//lastIndexOf()
//从后往前找字符

//slice可以从字符串中截取指定内容
let str = 'abcdefghijk'

let result = str.slice(0,2)

 console.log(result);//ab
 //两个参数，开始和结束位置的索引

 //substring
 //和splice类似
//不同的是这个方法不能接受负值

//substr
let str = 'abcdefghijk'

let result = str.slice(3,2)

 console.log(result);//de
//第一个参数是开始截取的位置
//第二个参数是截取的个数

//split
//可以将一个字符串拆分成一个数组
let str = 'abc,def,ghi,jk'

let result = str.split(',')

 console.log(result);//[ 'abc', 'def', 'ghi', 'jk' ]
 console.log(typeof result);//object
 console.log(result[0]);//abc

//toUpperCase
//转换为大写

//toLowerCase
//转换为小写



```
