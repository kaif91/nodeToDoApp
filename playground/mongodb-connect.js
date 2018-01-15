//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);
// MongoClient.connect('mongodb://localhost:27017/TodoApp', (error,db) => {
//   if(error){
//     return console.log('Unable to connect Mongo Db server '+error);
//   }
//   console.log('Connected to Mongo db');
//   const myDb=db.db('TodoApp');
//   myDb.collection('Todos').insertOne({
//     text: 'To do app',
//     completed: false
//   }, (err, result) => {
//     if(err){
//       return  console.log('Unable to insert to do');
//     }
//     console.log(JSON.stringify(result.ops,undefined,2));
//   });
//
//   //Adding Users collection
//   myDb.collection('Users').insertOne({
//     name: 'Test',
//     age: 50,
//     location:'Gurgaon'
//   }, (err, result) => {
//     if(err){
//       return  console.log('Unable to insert to do');
//     }
//     console.log(JSON.stringify(result.ops,undefined,2));
//   });
//
//   db.close();
// });
