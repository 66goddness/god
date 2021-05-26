exports.find =function(callback){
    fs.readFile(dbPath,'utf8',function(err,data){
        if(err){
            return callback(err)
        }
        callback(null,JSON.parse(data).students)
    })
}
