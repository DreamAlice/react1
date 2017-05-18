var webpack=require('webpack');
var path=require('path');

module.exports = {
  context:path.join(__dirname),

  entry:  "./src/index.js", 
  devServer: {
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    //colors: true,//终端中输出结果为彩色
    historyApiFallback: true,//不跳转
    //inline: true//实时刷新
  } ,
  module:{
    
    loaders:[
        {
       test:/\.js?$/,
       exclude:/(node_modules)/, //exclude,配置排除的文件夹
       loader:'babel-loader',
       query:{
        presets:['react','es2015'],
         } 
       }
    ]
  },
  output: {
   path: __dirname ,
    filename: "./src/bundle.js"
    
  }
  

}