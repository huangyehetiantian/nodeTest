var http=require('http');
//需要访问的文件的存放目录


//开启服务，监听8888端口
var server=http.createServer(function(req,res){
    /*
       req用来接受客户端数据
       res用来向客户端发送服务器数据
   */
    console.log("有客户端口链接");

    res.writeHeader(200,{
        'content-type' : 'text/html;charset="utf-8"'
    })
    res.write('这是正文部分显示');//显示给客户端
    res.end();
}).listen(8000);
console.log('服务器开启成功');