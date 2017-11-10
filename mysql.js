// //引入mysql模块
// var mysql=require('mysql');
//
//
// //c创建连接
// var conn=mysql.createConnection({
//     host:'192.168.1.248',
//     username:'root',
//     password:'ping',
//     database:'demo',
//     port:3306,
//     connectionLimit:10
// });
// //进行连接
// conn.connect(function(err){
//     if(err){
//         console.log(err);
//         return;
//     }
// });
// //  var username='yandong';
// //  var sql="select * from teacher where username='"+username+"'"
// // conn.query(sql,function(err,result){
// //     console.log(err)
// // })
// var username='yan';
// // //以insert写sql语句
// var sql="SELECT 1 + 1 AS solution='"+username+"'"
// conn.query(sql,function(err,result){
//     console.log(sql);
//     console.log(result)
//     // if(err){
//     //     console.err(err)
//     // }else{
//     //     console.log(result);
//     // }
// });
//
// //关闭connection
// conn.end(function(err){
//
//     if(err){
//
//         return;
//
//     }
//
//     console.log('[connection end] succeed!');
//
// });
var mysql  = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'test',
    port:'3306'
});

connection.connect();
// var  sql = 'SELECT * FROM user';
//
// connection.query(sql,function (err, result) {
//     if(err){
//         console.log('[SELECT ERROR] - ',err.message);
//         return;
//     }
//
//     console.log(result);
//     console.log('------------------------------------------------------------\n\n');
//     console.log(result[0].id)
//
//
//
// });
//
// connection.end();

// debugger;

