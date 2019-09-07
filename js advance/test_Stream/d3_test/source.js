const fs = require('fs')
const csv = require('fast-csv')

const ws = fs.createWriteStream('./d3_test/data.csv')

const rs = fs.createReadStream('csv.csv'
,{highWaterMark:30}//还是起作用的，把
)


rs.on('open',()=>{
    console.log('File is open');
})

rs.pipe(csv.parse({headers:true}))
    .on('data',(chunk)=>{

    rs.pause()    
    setTimeout(()=>{
        rs.resume()
    },1000)
    //如果不加定时函数的话，就输出的都是完整的对象，不会有残缺
    
    console.log(chunk);
})
rs.pipe(ws)


rs.on('close',()=>{
    console.log('File is close');
})