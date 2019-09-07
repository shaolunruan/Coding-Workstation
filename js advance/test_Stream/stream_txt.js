const fs = require('fs')
// const csv = require('fast-csv')

const ws = fs.createWriteStream('result_csv.txt')

const rs = fs.createReadStream('data_csv.csv',{
    highWaterMark:3000
})

let counter = 0
let resultString = []
rs.on('open',()=>{
    console.log('file is open');
})


rs.pipe(csv.parse({
    // objectMode:false,//对象模式，如果设置成false的话就不会输出成对象的结构了
    headers:true}))
    .on('data',(chunk)=>{
    counter++
    // console.log('yes');
    console.log(counter)
    // console.log(chunk.length);
    // console.log(chunk.toString());
    console.log(chunk);

    // resultString.push(chunk)
})

rs.on('error',(err)=>{
    console.log(err);
})

rs.on('end',()=>{
    console.log('file read is end');
})


// rs.pipe(ws)

// console.log(resultString.toString());