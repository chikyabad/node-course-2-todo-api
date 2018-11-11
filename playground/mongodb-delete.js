// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // Discratctors

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return console.log('Unable to connect to MongoDB server.')
  }
  console.log('Connected to MongoDB server.');

 // deleteMany
 // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
 //   console.log(result);
 // });

 // deleteOne
 // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
 //   console.log(result);
 // });

 // findOneAndDelete
 // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
 //   console.log(result);
 // });

 // db.collection('Users').deleteMany({name: 'Cristian Abad Chico'}).then((result) => {
 //   console.log(result);
 // });

 db.collection('Users').findOneAndDelete({_id: new ObjectID('5be82067e2b58321d832a915')}).then((result) => {
   console.log(result);
 });


  // db.close();
})
