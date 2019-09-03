const fs = require("fs")
// console.log(1);
// // console.log(calculator(2));
// ( () =>{

//     // let result = x^12
//     for(let i = 2;i<6;i++){
//         console.log(i);
//     }
// })()
// console.log(10);

let ws = fs.createWriteStream('132.txt')

ws.on('open',()=>{
    console.log('流打开了')
})
ws.on('close',()=>{
    console.log('流关闭了')
})

ws.close()

ws.write('通过可写流写入文件的内容')