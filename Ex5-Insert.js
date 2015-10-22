//If the databased is named 'data', then to start mongo on port 27017:  mongod --port 27017 --dbpath=./data.

var mongo = require('mongodb').MongoClient;
//The database is learnyoumongo.
mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err,db){
    if(err) throw err;
    var doc = {
        firstName: process.argv[2],
        lastName:process.argv[3]
    };
   
    db.collection('docs').insert(doc, function(err,data){
        if(err) throw err;
        console.log(JSON.stringify(doc));
         db.close();
    });
});