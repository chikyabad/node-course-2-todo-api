const {ObjectID} = require('mongodb');
const {mongoose} =  require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todos');
const {User} = require('./../server/models/users');

var id = '5bfa65d9fcd801a82132dfa2';

// Todo.find({
//   _id: id
// }).then ((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then ((todo) => {
//   console.log('Todo', todo);
// })

if (!ObjectID.isValid(id)){
  console.log('Id no valid');
}

Todo.findById(id).then((todo) => {
  if(!todo){
    return console.log('Id not found');
  }
  console.log('Todo', todo);
}).catch((e) => console.log(e)); // Capture other errors as incorrect type for the input
