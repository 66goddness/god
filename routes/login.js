let express = require('express');
let router = express.Router();
var fs =require('fs');
var path = require('path');
const { runInContext } = require('vm');
var mysql=require('mysql');
 var connection =mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'666666',
        database:'maga',
        port:3306
       });
       connection.connect();


router.get('/',(req,res)=>{
    res.render('catagory');
});
router.post('/catagory',(req,res) =>{
        let siger_name =req.body.siger_name;
        let siger_pass = req.body.siger_pass;  
     var query ="select name,password from tab where name='"+siger_name+"'and password='"+siger_pass+"'";
      connection.query(query,(err,result,fields)=>{
               var u =result[0];
                if(!u){
                    res.json({"s":-1});
                }else{
                    res.render('left');
                }
            })
            connection.end();
        });
    


// router.get('/register',(req,res)=>{
//     res.render('register');
// });


// router.post('/register',(req,res)=>{
//     res.render('send');
// });

// router.get('/register',function(req,res,next){
//     db.query("select * from friend",(err,result)=>{
//         res.render('register',{data:result});
//     });
// });



module.exports = router;