//封装二叉搜索树
function BinarySearchTree(){
    function Node(key){
        this.key = key
        this.left = null
        this.right = null
    }

    //属性
    this.root = null

    //方法
    BinarySearchTree.prototype.insert = function(key){
        let newNode = new Node(key)

        //判断是否为根节点
        if(this.root == null){
            this.root = newNode
        }else{
            //普通情况

        }

    }



    //!!!!!!!!!!!重点！！！！！！！！！！！
    //递归调用
    //用来判断左插还是右插
    BinarySearchTree.prototype.insertNode = function(node,newNode){
        if(newNode.key < node.key){//向左查找
            if(node.left == null){
                node.left = newNode
            }else{
                     this.insertNode(node.left,newNode)
            }
        }else{//向右查找
            if(node.right == null){
                node.right = newNode
            }else{
                     this.insertNode(node.right,newNode)
            }
        }
    }
}


//测试代码
let bst = new BinarySearchTree()

bst.insert(11)
bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(9)
bst.insert(8)
bst.insert(10)
bst.insert(13)
bst.insert(12)
bst.insert(14)
bst.insert(20)
bst.insert(18)
bst.insert(25)
bst.insert(6)

