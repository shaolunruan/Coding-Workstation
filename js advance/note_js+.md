js 高级
===
***
### 数据类型
* 基本类型
  * String
  * Number
  * Boolean
  * undefined
  * null
* 对象类型
  * Object
  * function   
  * Array

* 判断
  * typeof
  * instanceof
  ```js
    let a = new Array();
    console.log(a instanceof Array);//true

    let b = [1,2,3]
    console.log(b instanceof Array);//true
    console.log(b instanceof Object);//true//数据也是对象

  ```
  * ===

### 回调函数
```html
<button id='btn'>测试点击事件</button>

<script>
    document.getElementById('btn').onclick = function(){
        alert(this.innerHTML)//这里innerHTML的作用是去按钮的文本“测试点击事件”
    }

    //定时器
        //超时定时器
        setTimeout(function(){//定时器回调函数
            alert('到点了')
        },2000)
        //循环定时器
</script>
```

## IIFE
### 立即执行函数

>给匿名函数加一个(),再在后面加一个()表示执行，即可实现立即执行

```js
(function(){//匿名函数自调用
    console.log('。。。')
})()
```