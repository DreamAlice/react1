var React=require('react');
var ReactDom=require('react-dom');
var Main=require('./main');
var  myFont={fontSize:50,color:'#f00'};//把样式当成变量
var username="lily";//表达式和js内容结合
var course=[<span>css-</span>,<span>angular-</span>,<span>react</span>];//数组
var count=1;

ReactDom.render(
	 <div>
     <h2>link</h2>
     <p>这是第一个react例子</p>
     <p>表达式：{username=="lily"?username:"你没有登陆"}</p>
     <p>{count==2?course:course[2]}</p>
     </div>,
     document.getElementById('d')
	)