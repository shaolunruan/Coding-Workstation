Buffer
===
* 和数组很相似，但是在Buffer中存储的数据形式是二进制数据
* 使用Buffer不需要引入模块，直接使用即可
* Buffer中都是二进制数据，但在显示的时候是十六进制的 
* Buffer一个元素，占一个字节

简单文件的写入
===
## 异步写入
fs.writeFile(file,callback)

## 同步写入
fs.writeFileSync(file)

## Code
```js
let fs = require('fs')
fs.writeFile('hello.txt',function(err){
    if(!err){
        console.log("写入成功")
    }
})
```

流式文件的写入
===
* 同步、异步、简单文件的写入，都不适合大文件的写入，性能较差，容易导致内存的溢出

## Code
```js
let fs = require('fs')

//流式文件的写入
//创建一个流
//let ws = fs.creatWriteStream(path[,options])

let ws = fs.creatWriteStream('132.txt')

ws.write('通过可写流写入文件的内容')
```

通过监听流的open和close来监听流的达赖和关闭
```js
ws.open('open',()=>{
    console.log('流打开了')
})

ws.open('close',()=>{
    console.log('流关闭了')
})

ws.close()//是拔掉的目的水池的管子
ws.end()//拔掉水源的管子，剩下的额可以输送过去，建议使用
``` 

on可以绑定一个事件
once绑定一个一次性事件

流式文件读取
===
流式文件读取也适用于一些大文件，可以分多次将文件读取到内存中
```js
let fs = require('fs')

let rs = fs.createReadStream('an.jpg')

rs.on('open','可读流打开了')

rs.on('close','可读流关闭了')

rs.on('data',function(data){
    console.log(data)
    // console.log(data.length)

})
```