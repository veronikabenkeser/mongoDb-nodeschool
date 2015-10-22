var mongo = require("mongodb").MongoClient;
var url= 'mongodb://localhost:27017/learnyoumongo';
var size=process.argv[2];

mongo.connect(url,function(err,db){
   if(err)throw err;
   db.collection('prices').aggregate([
       { $match: {size: size}},
       { $group: {
           _id: 'total',
           total: {$avg: '$price'}
           }
       }
       ]).toArray(function(err,results){
           if(err)throw err;
           if(results){
           console.log(Number(results[0].total).toFixed(2));
           } else {
               throw new Error('No results found.');
           }
           db.close();
       });
});