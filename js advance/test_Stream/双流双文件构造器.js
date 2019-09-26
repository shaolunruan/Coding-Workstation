//此方法被证明是可行的
const fs = require('fs')

const through2 = require('through2')

const csv = require('fast-csv')


const rs = fs.createReadStream('usage_test.csv')
const ws = fs.createWriteStream('./stream-adventure/r.csv')
const xxx = fs.createWriteStream('./stream-adventure/xxx.csv')



//监听读取的打开
rs.on('open',()=>{
    console.log('开始读取');
})

let i = 0;

let skip = through2({objectMode:true},function(chunk,enc,callback){

    let rss = fs.createReadStream('sampleTree_690001.csv')

    let a = new Object()

    rss.pipe(csv.parse({headers:true}))
    .pipe(through2({objectMode:true},function(CHUNK,enc,callback){

        //循环查找每个CHUNK，对比machine_id        
        if(chunk.machine_id == CHUNK.machine_id){
            if(chunk.time_stamp>CHUNK.start_time && chunk.time_stamp<CHUNK.end_time){
                let b = {
                    machine_id: CHUNK.machine_id,
                    time_stamp: chunk.time_stamp,
                    cpu: chunk.cpu,
                    memory: chunk.memory,
                    disk: chunk.disk,
                    inst_name: CHUNK.inst_name,
                    task_name: CHUNK.task_name,
                    job_name: CHUNK.job_name
                }

                console.log(b);
                this.push(JSON.stringify(b))
            }
        }

        callback()
    })).pipe(ws)
    // 


    // this.ed = chunk.time_stamp
    // console.log(this);
    this.push('chunk')

    callback()
})

rs.pipe(csv.parse({headers:true})).pipe(skip).pipe(xxx)



rs.on('data',data=>{
    console.log('正在读取')
})



rs.on('end',()=>{
    console.log('读取结束');
    // console.log(i);
})