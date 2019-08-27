//双向链表的封装

function DoublyLinkedList(){

    //属性
    this.head = null
    this.tail = null
    this.length = 0

    //创建一个内部类
    function Node(data){
        this.data = data
        this.prev = null
        this.next = null
    }

    //封装方法 

    //追加
    DoublyLinkedList.prototype.append = function(data){
        //判断是否添加的是第一个节点

        let newNode = new Node(data)
        if(this.length == 0){
            
            this.head = newNode
            this.tail = newNode
        }else{
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
        }

        this.length += 1
    }

    //将链表转化成字符串形式
    DoublyLinkedList.prototype.toString = function(){
        return this.backString()
    }

    DoublyLinkedList.prototype.forwardString = function(){
        let current = this.tail
        let resultString = ''

        while(current){
            resultString += current.data + ' '
            current = current.prev            
        }

        return resultString
    }

    DoublyLinkedList.prototype.backString = function(){
        let current = this.head
        let resultString = ''

        while(current){
            resultString += current.data + ' '
            current = current.next
        }

        return resultString
    }

    DoublyLinkedList.prototype.insert = function(position,data){
        //越界判断
        if(position<0 || position>this.length)
        return false

        //开始创建
        let newNode = new Node(data)

        //原来是空
        if(this.length == 0){
            this.head = newNode
            this.tail = newNode
        }else{
            if(position == 0){
                this.head.prev = newNode
                newNode.next = this.head
                this.head = newNode
            }
        else if(position == this.length){//加在最后一个
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
        }
        else//普通情况
        {
            let current = this.head
            let index = 0

            while(index<position){
                current = current.next
            }

            //关键哦
            newNode.next = current
            newNode.prev = current.prev
            current.prev.next = newNode
            current.prev = newNode
        }
    }
}

    DoublyLinkedList.prototype.removeAt = function(position){
        if(position < 0 || position >= this.length) return null

        //判断是否只有一个节点
        let current = this.head
        if(this.length == 1){
            this.head = null
            this.tail = null
        }else{
            if(position == 0){//判断删除的是否是第一个节点
                this.head.next.prev = null
                this.head = this.head.next
            }else if(position == this.length - 1){//最后节点
                current = this.tail
                this.tail.prev.next = null
                this.tail = this.tail.prev
            }else{
                let index = 0
                let current = this.head

                while(index++ < position){
                    current = current.next
                }

                current.prev.next = current.next
                current.next.prev = current.prev
            }
        }

        this.length -= 1

        return current.data
    }
}
//测试
let list = new DoublyLinkedList()

list.append('abc')
list.append('cba')
list.append('nba')

// console.log(list);
// console.log(list.backString());
console.log(list.forwardString());


