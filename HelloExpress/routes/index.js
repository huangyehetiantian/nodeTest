var express = require('express');
var router = express.Router();
var mysql  = require('mysql');
var connectionNews = require('../mysql');


/* GET home page. */
router.get('/', function(req, res, next) {
    var connection = mysql.createConnection(connectionNews);

    connection.connect();

    var  sql = 'SELECT * FROM news';

    connection.query(sql,function (err, result) {
        if(err){
            console.log('[SELECT ERROR] - ',err.message);
            return;
        }
        console.log(result)
        res.render('index', { title: result[0].titleName });
    });

});


module.exports = router;
// var express = require('express');
// var router = express.Router();
// var connectionNews=require('../mysql');
// var conn = mysql.createConnection(connectionNews);
//
// /* GET home page. */
// router.get('/', function(req, res, next) {
//     var title=""
//     var  sql = 'SELECT * FROM user';
//     conn.query(sql,function (err, result) {
//         if(err){
//             console.log('[SELECT ERROR] - ',err.message);
//             return;
//         }
//         console.log(result);
//         console.log('------------------------------------------------------------\n\n');
//         console.log(432423423)
//         res.render('index', { title: result[0].id });
//     });
//     conn.end();
//
// });
//
//
// module.exports = router;
