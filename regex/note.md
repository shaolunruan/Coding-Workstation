正则表达式学习笔记
RegularExpress
===
***
常用字符串命令
```js
let str = 'abcdef'

console.log(str.search('b'));//1, 查找字符
console.log(str.indexOf('u'));//-1, 功能与search相似
console.log(str.substring(2,5));//cde, 切割字符串, 不包括结束位置
console.log(str.substring(1));//bcdef, 取到结尾
console.log(str.charAt(3));//d, 取某一位的字符

let str0 = '12-56-2019-16'
console.log(str.split('-'));//12,56,2019,16 切分字符串
```
***
## 什么是规则表达式

>强大的字符串匹配工具
是一种人类很难读懂的文字
* RegExp对象
    * js风格
    ```js
    let re = new RegExp('a','i');
    ```
    * perl风格
    ```js
    let re = /a/i;
    ```
## 字符串与正则配合
#### search
* 字符串搜索
    * 返回出现的位置
    * 忽略大小写：i
    * 判断浏览器类型
#### match
* 获取匹配的项目
    * 量词: +
    * 量词变化: \d, \d\d和\d+
    * 全局匹配: g——global
    * 例子: 找出所有数字
    * 作用： 把符合条件的提取出来

```js
Demo1：

let str = 'adsf 23 jsu 890';
let re = /\d/;//\d指所有数字

console.log(str.search(re))//5
```

```js
Demo2：

let str = 'adsf 23 jsu 890';
let re = /\d/g;//\d指所有数字，g指所有数字，global，不然下面的语句只能提取出一个“2”

console.log(str.match(re))//[ '2', '3', '8', '9', '0' ]
```

```js
Demo3：

let str = 'adsf 23 jsu 1 890';
let re = /\d\d/g;//找出连续两个数字的组合

console.log(str.match(re))//[ '23', '89' ]
```