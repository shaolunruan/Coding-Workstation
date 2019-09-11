// const arr = [5,20,4,8,9,100,66,47,33,88]

// const arr2 = [{
//     x:1,
//     y:11
// },{
//     x:3,
//     y:33
// },{
//     x:2,
//     y:22
// },{
//     x:4,
//     y:44
// }]

// function ttt(a,b){
    
//        return  a.x - b.x

// }
// console.log(arr2.sort(ttt));

let arr = [1,5,8,4,6,8,2,5,7,4,56]

// for(let i in arr){
//     console.log(i);
// }

let b = arr.map((d,i)=>{
    return d*2
    
})

let arr2 = [{
    x : 4
},{
    x : 2
},{
    x: 3
},{
    x: 1
}]

// for(let i in arr){
//     arr[i] = 3
// }

let bb = arr2.map((d,i)=>{
    return 3
})
console.log(bb);