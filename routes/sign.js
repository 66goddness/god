let express = require('express');
let router = express.Router();
var User=require('./bean/user');
var mysql=require('mysql')

 var connection =mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'666666',
        database:'maga',
        port:3306
       });
       connection.connect();

router.get("/",(req,res)=>{
    res.render('sign');
});



router.post('/',(req,res) =>{
       // 获取前端传递的参数,放入对象
      let user = new User(req.body.siger_name,req.body.siger_pass,req.body.place);
     
     
       var query="insert tab_mag(name,password,place) values('"+user.siger_name+"','"+user.siger_pass+"','"+user.place+"')";
       connection.query(query,(err,result)=>{

           if(err){
        console.log(err);
        return;
    }
    res.redirect("/")
       })
      
    });

module.exports = router;