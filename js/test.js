// console.log(111);

// //创建一个http服务器
// var http = require('http');

// //创建一个服务
// var server = http.createServer(function(request,response){
// 	// 处理和响应
// 	response.writeHeader('200',{
// 		'Content-Type' : 'text/html',//告诉客户端我给你的是html
// 		'key1' : 'value1'
// 	});

// 	response.write("<h1>哈哈哈哈</h1>");
// 	response.end();
// })

// //启动服务
// server.listen(1010,function(error){
// 	console.log('成功监听1010窗口');
// });

// console.log(111);

// //创建一个http服务器
// var http = require('http');

// //创建一个服务
// var server = http.createServer(function(request,response){
// 	// 处理和响应
// 	var requestURL = request.url;
// 	switch( requestURL ){
// 		case "/signin" :
// 			//请求登录页面
// 			signin(request,response);
// 		break;
// 		case "/post" :
// 			//提交表单
// 			post(request,response);
// 		break;
// 		default :
// 			response.write(404,{});
// 			response.end();
// 		break;

// 	}

// 	response.write("<h1>哈哈哈哈</h1>");
// 	response.end();
// })

// //启动服务
// server.listen(1010,function(error){
// 	console.log('成功监听1010窗口');
// });

// function sigin(request,response){
// 	document.write("请求登录页面");
// 	response.end();
// }

// function post(request,response){
// 	document.write("请求提交表单");
// 	response.end();
// }

var gulp =  require("gulp");
gulp.task("say",function(){
	console.log("hello 123");
});

//testtest
//local v2 test
