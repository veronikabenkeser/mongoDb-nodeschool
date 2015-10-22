var mongo = require('mongodb').MongoClient;
//The database is learnyoumongo.
mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err,db){
    if(err) throw err;
    
    db.collection('parrots').find({
        age: {$gt: parseInt((process.argv[2]),10)}
    },
    {
        name:1,
        age:1,
        _id:0
    }
    
    ).toArray(function(err, documents){
        if(err) throw err;
      console.log(documents);
        db.close();
    });
});