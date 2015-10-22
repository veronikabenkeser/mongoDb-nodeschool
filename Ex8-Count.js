var mongo = require("mongodb").MongoClient;
var ageP = process.argv[2];
var url ='mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err,db){
    if(err)throw err;
    db.collection('parrots').count({
        age: {$gt: +ageP}
    },function(err,count){
        if(err)throw err;
        console.log(count);
        db.close();
    });
});