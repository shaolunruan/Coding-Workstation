//栈的封装
function Stack(){//Stack是一个类，很像Number类
    //栈的属性
    this.items=[]
    // return this.items
}

    //栈的操作
    //(开始封装方法)
    // this.push = function(){

    // }

    //推荐用下面这种方法，效率更高一点
    Stack.prototype={
    //1.将元素压入栈
        push : function(element){
        this.items.push(element)
    },
    //2.从栈中取元素
        pop : function(){
        return this.items.pop()
    },
    //3.查看栈顶元素
        peek:function(){
        return this.items[this.items.length-1]
    },
    //4.判断栈是否为空
    isEmpty : function(){
        return this.items.length == 0
    },
    //5.获取栈中的元素个数
    size : function(){
        return this.items.length
    },
    //6.toString方法
    toString : function(){
        let resultString = ''
        for(let i = 0; i<this.items.length; i++){
            resultString +=this.items[i]+' '
        }
        return resultString
    }
    }
   

//栈的使用
let s = new Stack()
s.push(20)
s.push(10)
s.push(100)
s.push(77)

s.pop()
s.pop()

console.log(s);
console.log(s.isEmpty());
