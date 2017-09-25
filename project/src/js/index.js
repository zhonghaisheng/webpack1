import './util.js'
import childSay from './child.js'
import '../css/index.css'
// import 'jquery.mousewheel'//npm局部安装
import './jquery.mousewheel.js'//自个请求
import Scroll from './scroll.js'
import 'bootstrap/dist/css/bootstrap.css'

console.log(childSay);

function say(str){
	console.log(str);
}

say('hello world!!!!!!');

// /*单屏滚动*/
let scroll = new Scroll();

//ajax请求方法
$.ajax({
	type:'post',
	url:'/api/test',
	data:{},
	dataType:'json',
	success:function(result){
		console.log(result.status);
	}
})