let express = require('express');
let router = express.Router();
var User=require('./bean/user');
var db =require('./db');
var mysql=require('mysql')

 var connection =mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'666666',
        database:'maga',
        port:3306
       });
       connection.connect();

    router.get('/',(req,res)=>{
        res.render('index');
    });
    
    
    
    router.post('/',(req,res) =>{
           // 获取前端传递的参数,放入对象
          let user = new User(req.body.friendname,req.body.old,req.body.tabsex,req.body.city,req.body.bookname,req.body.other,req.body.remark);
         
         
           var query="insert friend(friendname,old,sex,city,bookname,other,remark) values('"+user.friendname+"','"+user.old+"','"+user.tabsex+"','"+user.city+"','"+user.bookname+"','"+user.other+"','"+user.remark+"')";
           connection.query(query,(err,result)=>{
    
               if(err){
            console.log(err);
            return;
        }
    //     // res.render('index')
          })
          
         });


        // router.post('/',(req,res)=>{
        //     let id =req.body.id
        //         let friendname=req.body.friendname
        //         let old=req.body.old
        //         let tabsex=req.body.tabsex
        //         let city=req.body.city
        //         let bookname=req.body.bookname
        //         ss="insert friend(id,friendname,old,sex,city,bookname,other,remark) values('"+id+"','"+friendname+"','"+old+"','"+tabsex+"','"+city+"','"+bookname+"','"+other+"','"+remark+"')";
        //         db.sql(ss,(err,rows)=>{
        //             if (err) {
        //                  console.log(err);
        //             } else {
        //                 res.redirect('/index');
        //             }
        //             
        //         })
        //     })
    
    module.exports = router;