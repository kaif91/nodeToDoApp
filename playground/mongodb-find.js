//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error,db) => {
  if(error){
    return console.log('Unable to connect Mongo Db server '+error);
  }
  console.log('Connected to Mongo db');
  const myDb=db.db('TodoApp');
  myDb.collection('Todos').find().count().then( (count) => {
    console.log('todos '+count);
  },(error) => {
    console.log('Unable to fetch data '+error);
  });
//  db.close();
});
