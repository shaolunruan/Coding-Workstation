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
    let re = new RegExp('a');
    ```
    * perl风格
    ```js
    let re = /a/;
    ```