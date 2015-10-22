var mongo = require("mongodb").MongoClient;
var url =  'mongodb://localhost:27017/'+process.argv[2];
var id = process.argv[4];
var collection= process.argv[3];

mongo.connect(url,function(err,db){
    if(err)throw err;
    db.collection(collection).remove({
        _id:id
    },function(err){
        if(err)throw err;
        db.close();
    });
});