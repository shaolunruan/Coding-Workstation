//封装队列类
function Queue(){
    this.items = []
}

//封装方法
Queue.prototype={
    //向队列尾部添加一个新的项
    enqueue:function(element){
        this.items.push(element)
    },
    //移除队列的第一项
    dequeue:function(){
       return this.items.shift()
    },
    //返回队列中的第一个元素
    front:function(){
        return this.items[0]
    },
    //判断是否为空
    isEmpty:function(){
        return this.items.length == 0
    },
    //返回长度
    size:function(){
        return this.items.length
    },
    //转化为字符串
    toString:function(){
        let resultString = ''
        for(let i = 0; i<this.items.length; i++){
            resultString +=this.items[i]+' '
        }
        return resultString
    }
}

let q = new Queue()
q.enqueue(0)
q.enqueue(10)
q.enqueue(111)

console.log(q);

q.dequeue()

console.log(q);

console.log(q.front());

console.log(q.toString());