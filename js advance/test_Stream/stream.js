const fs = require('fs')
const csv = require('fast-csv')
const through2 = require('through2')

const rs = fs.createReadStream('sampleTree_690000.csv',{
    // highWaterMark:10
})

let counter = 0

rs.on('open',()=>{
    console.log('file is open');
})

    rs.pipe(csv.parse({headers:true}))
    .pipe(through2.obj((chunk,enc,callback)=>{
        // this.push({
        //     name    : chunk[0]
        //     , address : chunk[3]
        //     , phone   : chunk[10]
        // })
        this.ed = chunk.inst_name
        console.log(this);
        callback()//加这个函数的作用是：为了让回调函数继续循环执行
    }))
    .on('data',(chunk)=>{
    counter++
    console.log('yes');
    console.log(counter)
    // console.log(chunk.length);
    // console.log(chunk.toString());
    console.log(chunk);
})

rs.on('error',(err)=>{
    console.log(err);
})

//在读取结束后，一般也有文章可做，
//比如构造一个数组，然后把生成的元素都塞进数组里
rs.on('end',()=>{
    console.log('file read is end');
})

