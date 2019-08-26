//封装集合类

function Set(){
    //属性
    this.items = {}
}
    //方法
    Set.prototype = {

        add:function(value){
            //先判断是否已经存在value键值对
            if(this.has(value)){
                return false
            }
            this.items[value] = value
            return true

        },

        has:function(value){
            return this.items.hasOwnProperty(value)
        },

        remove:function(value){
            //判断集合中是否包含该元素
            if(!this.items(value)){
                return false
            }

            delete this.items[value]
            return true
        },

        clear:function(){
            this.items = {}
        },

        size:function(){
            return Object.keys(this.items).length
        },

        values:function(){
            return Object.keys(this.items)
        },

        //集合之间的操作
        //并集
        union: function(otherSet){
            //this:集合A
            //otherSet:集合B
            //创建最终的集合
            let  unionSet = new Set()

            //将A中的所有元素添加到最终集合中
            let values = this.values()
            for(let i = 0;i<values.length;i++){
                unionSet.add(values[i])
            }

            //获取B中的元素，加到新集合中
            values = otherSet.values()
            for(let i = 0;i<values.length;i++){
                unionSet.add(values[i])
            }

            return unionSet

        },

        //交集
        interSection:function(otherSet){
            let interSection = new Set()
            
            //将A所有元素添加到一个集合中
            let values = this.values()

            for(let i = 0;i<values.length;i++){
                if(otherSet.has(values[i])){
                    interSection.add(values[i])
                }
            }

            return interSection
        },

        //差集
        diff:function(otherSet){
            let values = this.values()

            let interSection = this.interSection(otherSet)

            let diffSection = new Set()

            for(let i = 0;i<values.length;i++){
                if(!interSection.has(values[i])){
                    diffSection.add(values[i])
                }
            }

            return diffSection
        }
    }


//测试
// let set = new Set()
// console.log(set.add('abc'));
// console.log(set.add('abc'));
// console.log(set.add('cba'));
// console.log(set.add('nba'));

// console.log(set);

// console.log(set.size());

let setA= new Set()
setA.add('abc')
setA.add('cba')
setA.add('nba')

let setB= new Set()
setB.add('aaa')
setB.add('nba')
setB.add('cba')

//求并集
// console.log(setA.union(setB));

//求并集
// console.log(setA.interSection(setB));

//求差集
// console.log(setA.diff(setB));

function rtn(enter){
    if(enter){
        return true
    }
     return false
}

console.log(rtn(false));



