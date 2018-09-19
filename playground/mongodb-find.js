const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if(err){
    return console.log('Unable to connect to mongoDB server');
  }
  console.log("Connected to MongoDB Server");

  db.collection('Todos').find({
  _id: new ObjectID('5ba15dcb51ac6ceff8c5a14f')
}).toArray().then((docs)=>{
    console.log('Todos');
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
      console.log('Unable to fetcg todos ', err);
  });

//  db.close();
});
