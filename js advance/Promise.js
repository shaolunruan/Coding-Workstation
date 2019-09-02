//异步请求
// let waitSecond = new Promise(function(resolve,reject){
//     setTimeout(resolve,1000)
// });

// waitSecond.then(()=>{
//     console.log('hello');
//     // return waitSecond;
// }).then(function(){
//     console.log('hi');
// })

let p = new Promise((res,rej)=>{
    console.log('aa');
    return rej();
})

p.catch(()=>{
    console.log('bb');
})