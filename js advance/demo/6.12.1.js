// let arr = ['Tom','Jerry','Spark','Typhy']

// let result = arr.join('@')

// console.log(result);

let set = [5,2,3,11,45]

set.sort((a,b)=>{
    if(a>b){
    return 1;
    }else if(a<b){
        return -1;
    }else{
        return 0;
    }
});

console.log(set);