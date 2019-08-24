//单向链表
function LinkedList(){
    //封装一个内部类
    function Node(data){
        this.data = data
        this.next = null

    }

    //属性
    this.head = null
    this.length = 0

    //追加方法
    LinkedList.prototype.append = function(data){
        //创建新节点
         let newNode = new Node(data)

        if(this.length == 0){//这是第一个节点
            
            this.head = newNode
        }else{

            let current = this.head
            while(current.next){
                current = current.next
            }
            //最后节点指向新节点
            current.next = newNode
        }

        //length+1
        this.length += 1
    }




    //toString方法
    LinkedList.prototype.toString = function(){
        let current = this.head
        let listString = ''
        while(current){
            listString += current.data + " "
            current = current.next
        }
        return listString
    }
}

//测试
let list = new LinkedList()

list.append("abc")
list.append("cba")
list.append("nba")


console.log(list);