// Start local MongoDB C:\Users\chicoc01\MongoDB\bin>mongod.exe --dbpath C:\Users\chicoc01\mongo-data
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // Discratctors

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return console.log('Unable to connect to MongoDB server.')
  }
  console.log('Connected to MongoDB server.');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined,2));
  // })

  // db.collection('Users').insertOne({
  //   name: 'Cristian Abad Chico',
  //   age: 42,
  //   location: 'Barcelona'
  // }, (err, result) => {
  //   if (err){
  //     return console.log('Unable to insert user', err);
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined,2));
  // })

  db.close();
})
