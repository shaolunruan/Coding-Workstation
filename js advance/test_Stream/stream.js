const fs = require('fs')
const csv = require('fast-csv')

const rs = fs.createReadStream('data_csv.csv',{
    highWaterMark:10
})

let counter = 0

rs.on('open',()=>{
    console.log('file is open');
})

rs.pipe(csv.parse({headers:true}))
    .on('data',(chunk)=>{
    counter++
    console.log('yes');
    console.log(counter)
    // console.log(chunk.length);
    // console.log(chunk.toString());
    console.log(typeof chunk);
})

rs.on('error',(err)=>{
    console.log(err);
})

rs.on('end',()=>{
    console.log('file read is end');
})