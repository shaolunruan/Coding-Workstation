const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebpackPlugin({
    template:path.join(__dirname, './src/index.html'),//源文件
    filename:'index.html'
})

module.exports = {
    mode:'development',
    plugins: [
        htmlPlugin
    ],
    module:{//所有webpack解决不了的文件结构，或者节点简写，都会来这个文件下来找这个module
        rules:[//第三方匹配规则
            { test:/\.js|jsx$/, use:'babel-loader',exclude:/node_modules/}
        ]
    },

    resolve:{
        extensions: ['.js','.jsx','.json'],
        alias:{
            '@':path.join(__dirname,'./src')
        }
    }
}