const fs = require('fs')

const through2 = require('through2')

const csv = require('fast-csv')

const rs = fs.createReadStream('usage_test.csv')
const ws = fs.createWriteStream('./stream-adventure/r.csv')

//监听读取的打开
rs.on('open',()=>{
    console.log('开始读取');
})

let i = 0;

// let all = []

// let skip = through2({objectMode:true},function (chunk, encoding, callback) {
    // this.push({
    //     name    : chunk[0]
    // })

//当job_name为string类型是，终于管用了    
// this.push(JSON.stringify(chunk))

// console.log(typeof chunk.job_name);//string

//以下是this对象存放数据的地方
// console.log(this._transformState.writechunk);

    // callback()

//   })

//开始处理
// rs.pipe(csv2())
// .pipe(through2.obj((chunk,encoding,callback)=>{
    
//     // console.log(`${typeof chunk}+${i+=1}`);
//     if(chunk.job_name == 'j_82329'){
//         i+=1
//     this.push('123')
//     }



//     //this可能指向的是through2的可写流
//     // console.log(this);
//     return callback()
// })).pipe(ws)

// rs.pipe(csv.parse({headers:true})).pipe(skip).pipe(ws)

rs.pipe(csv.parse({headers:true}))
.pipe(through2({objectMode:true},(chunk,enc,callback)=>{

    let a = new Object();
    a.machine_id = chunk.machine_id
    a.time_stamp = chunk.time_stamp

    let rss = fs.createReadStream('sampleTree_690000.csv')

    rss.pipe(csv.parse({headers:true}))
    .pipe(through2({objectMode:true},(CHUNK,enc,callback)=>{

        if(a.machine_id == CHUNK.time_stamp && a.time_stamp == CHUNK.time_stamp){
            
        }

        callback()
    }))

    callback()
}))
// .pipe(ws)

.on('data',data=>{
    console.log('正在读取')
})

// rs.pipe(ws)

.on('end',()=>{
    console.log('读取结束');
    console.log(i);
})
