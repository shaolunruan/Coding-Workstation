import React from 'react'
import ReactDOM from 'react-dom'

//2.创建虚拟DOM元素
// const myh1 = React.createElement('h1',{id:'myh1', title:'this is a h1'},'这是一个h1')

// const mydiv = React.createElement('div',null,'这是一个div元素',myh1)

//在js文件中，写入html和xml的语法，叫做jsx，即符合xml规范的js
//jsx语法的本质，还是在编译的时候，转化成了React.createElement形式来实现
// const mydiv = <div id='mydiv' title='div aaa'>这是一个div元素</div>

// ReactDOM.render(mydiv, document.getElementById('app'))

let a = 10
let boo = true
let title = '999'

//在什么情况下使用{}呢？当我们在需要在jsx中写js表达式了，就需要写在{}中
ReactDOM.render(<div>
    {a + 2}
    <hr/>
    {boo?'条件为真' : '条件为假'}
    <hr/>
    <p title={title}>这是p标签</p>
</div>,document.getElementById('app'))