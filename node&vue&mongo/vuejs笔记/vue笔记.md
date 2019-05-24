vueJS学习手册
===
***
* v-cloak//取消加载的闪烁问题
```js
<p>{{msg}}</p>
<h4 v-test="msg"></h4>//两个都是插值
<div v-html="msg2"></div>//功能同上，但是可以解析内容的html标签
```
* v-bind是vue中绑定属性的指令
```js
 <input type="button" value = "按钮" v-on:click="show">//然后在method中定义方法
 v-on:click.stop = "XXX"//.stop是click的阻止冒泡方法，本来一层一层向外触发，现在只触发点击的button
 v-on:click.prevent//阻止默认行为，比如跳转指令，就不会再跳转了
 v-on:click.capture//相反与stop，从外到里触发
 v-on:click.self//只有点击当前元素才会触发，不想原来的会牵扯
 v-on:click.once只会触发一次
 //.self只会阻止自己身上的冒泡，到外层便还是会触发连带
 //.stop把外边所有的连带事件都阻止
```
 v-model//双向事件绑定
 v和m的双向数据绑定
 比如表单元素：input select checkbox textarea
 例子：在线计算器的实现

 属性绑定//
 ```js
 <div id="app">
        <h1 v-bind:class="['thin']"> 这是一个竹</h1>
 </div>//第一种形式，v-bind绑定

<div id="app">
<h1 v-bind:class="['thin','italic',flag?'red':'']"> 这是一个竹</h1>
</div>//第二种方式，使用三元表达式，flag为true触发~~~

<div id="app">
    <h1 v-bind:class="['thin','italic',{'active':flag}]"> 这是一个竹</h1>
</div>//第三种表达式，比二更简洁
```




```js
//内联样式
<h1 style="color:red;font-size:40px">hahahahahahha哈哈哈哈哈哈</h1>
\\或者
<h1 v-bind:style="{color:'red','font-size':'40px','font-weight':'200'}">hahahahahahahwula哈哈哈哈哈哈哈哈</h1>
\\或者
<h1 v-bind:style="[styleObj1,styleObj2]">hahahahahahahwula哈哈哈哈哈哈哈哈</h1>//绑定多个样式
//v-for
<p v-for="(item,i) in list">
索引值：{{i}} --- {{item}}
</p>//不用索引，不加括号。item只是符号，用啥都行
```

//list追加：list.push()
```js
//v-if的特点：每次都会重新删除和创建
//v-show的特点：每次不会进行DOM的删除和创建操作，只是切换了元素的display:none

//搜索字符串：
String.prototype.inccludes(str)

{{name | 过滤器的名称}}
//定义：
Vue.filter("过滤器的名称",function(name ,){
	XXXX
})
```
padstart//填充函数 2015-01-02的0

//点回车，触发//                        
<input type="text" class="form-control" v-model="name" @keyup.enter="add()">

//获得焦点（刷新页面就在那里闪烁）//
//先定义全局函数//Vue.directive('focus',{
	bind:function(el){
		el.focus()
	},
	//每当指令绑定到元素上的时候，就会执行这个bind函数，且只执行一次//样式相关

	inserted：function(el){
	el.focus()
	},
	//表示元素插入到DOM中的时候，会执行//js相关

	updated：function(){},
})
	//当VNode更新的时候，会执行，会触发多次 
//然后再元素里，插入v-focuss

***
## vue-resource
1. 先导入第三方包
1. 开始
```js
	this.$http.get('http://vue.studyit.io/api/getlunbo').then(function(result){
        console.log(result);
    })
```
 发起get请求之后，通过 .then设置成功的回调函数
 有三种类型的请求get，post，jsonp

transition过渡动画
全局动画：v-enter
自定义动画：my-enter

列表list动画实现

通过Vue.extend来创建全局组件
使用Vue.component('组件的名称'，创建出来的组件模板对象)
要使用组件时，直接把组建的名称，以html的形式引入页面中即可（不可以用“驼峰”）
========》也可以合并为：
```js
Vue.component('myCom1',vue.extend({
	template:'<h3>使用XXXXXXX</h3>'
}))
```
