import React from 'react'
import ReactDOM from 'react-dom'

//用class关键字创建组件
//用class创建的组件，有私有属性和生命周期函数，推荐使用这种方法
class Movie extends React.Component{

    constructor(){
        super()

        this.state = {}//这个就相当于vue里面的data（）{return  XX}，相当于私有数据 
        //this.props是外面传进来的数据，this.state是组建的私有数据
    }

    render(){
    return <div>
        
   { this.props.name}
    </div>        
    }
}


ReactDOM.render(<Movie name="abc"></Movie>,document.getElementById('app'))