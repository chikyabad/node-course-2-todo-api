// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // Discratctors

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return console.log('Unable to connect to MongoDB server.')
  }
  console.log('Connected to MongoDB server.');

 // findOneAndUpdate
 // db.collection('Todos').findOneAndUpdate(
 //   {_id: new ObjectID('5be8438c23ab6264affd74fd')}, {
 //     $set : {
 //       completed: true
 //     }
 //   },{
 //     returnOriginal: false
 //   }).then((result) => {
 //     console.log(result);
 //   })

 db.collection('Users').findOneAndUpdate(
   {_id: new ObjectID('5be81ccd3ec9880b208b4f8a')}, {
     $set : {
       name: 'Bernardo'
     },
     $inc : {
       age: 1
     }
   },{
     returnOriginal: false
   }).then((result) => {
     console.log(result);
   })

  // db.close();
})
