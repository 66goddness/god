let express = require('express');
let router = express.Router();
var db =require('./db');


// router.get('/',(req,res)=>{
//     res.render('register');
// });
router.get('/',function(req,res){
  db.queryParam("select * from friend",(err,result)=>{
            res.render('register',{data:result});
        });
    });

router.post('/',(req,res)=>{
    res.render('send');
});

module.exports = router;