const fs = require('fs')

const through2 = require('through2')

const csv = require('fast-csv')

const rs = fs.createReadStream('sampleTree_690000.csv')

//监听读取的打开
rs.on('open',()=>{
    console.log('开始读取');
})

let i = 0;

//开始处理
rs.pipe(csv.parse({headers:true}))
.pipe(through2.obj((chunk,enc,callback)=>{
    
    // console.log(`${typeof chunk}+${i+=1}`);
    if(chunk.job_name == 'j_82329'){
        i+=1
    }

    //this可能指向的是through2的可写流
    console.log(this);
    callback()
}))
.on('data',data=>{
    console.log('正在读取')
})

.on('end',()=>{
    console.log('读取结束');
    console.log(i);
})
