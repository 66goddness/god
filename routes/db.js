var mysql = require('mysql');
var db ={};


db.queryParam=function(sql,param,callback){
    var con =mysql.createConnection({
         host: "localhost",
        port: "3306",
        user: "root",
        password: "666666",
        database: "maga"
    });
    con.query(sql,param,(err,results)=>{
        if(err){
            callback(err,results); 
            return;
        }
       callback(null,rows);
    });
    con.end();
}

module.exports=db;
