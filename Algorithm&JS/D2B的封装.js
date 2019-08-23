require("./Stack_package")

//函数:将十进制转化为二进制
function dec2bin(decNumber){
    //定义栈对象
    let stack = new Stack()
    
    //循环操作
    while(decNumber > 0){
        stack.push(decNumber%2)

        //获取整除后的结果，作为下一次运算
        decNumber = Math.floor(decNumber/2)
    }

    //从栈中取出0和1
    let binaryString = ''
    while(!stack.isEmpty()){
        binaryString += stack.pop()
    }
    return binaryString
}

//测试
console.log(dec2bin(100));

