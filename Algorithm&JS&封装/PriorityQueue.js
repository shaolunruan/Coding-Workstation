//https://www.bilibili.com/video/av55233959/?p=20

//封装优先级队列
function priorityQueue(){
    //创建了一个内部类 用来保存原数据和优先级
    function queueElement(element,priority){
        this.element = element,
        this.priority = priority
    }

    //封装属性
    this.items = []


priorityQueue.prototype.enqueue = function(element,priority){
         queueElement =new queueElement(element,priority)

        //判断队列是否为空
        if(this.items.length == 0){
            this.items.push(queueElement)
        }else{
            let added = false
            for(let i = 0;i<this.items.length;i++){
                if(queueElement.priority<this.items[i]){
                    this.items.splice(i,0,queueElement)
                    added = true
                    break
                }
            }
            if(!added){
                this.items.push(queueElement)
            }
        }


    }
}


let pq = new priorityQueue();

pq.enqueue("abc",111)
pq.enqueue("cba",200)
pq.enqueue("nba",50)
pq.enqueue("ac",66)

console.log(pq);