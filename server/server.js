var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} =  require('./db/mongoose');
const {ObjectID} = require('mongodb');
var {Todo} = require('./models/todos');
var {User} = require('./models/users');

var app = express();

app.use(bodyParser.json());

// Create Todos
app.post('/todos', (req, res) => {

  var todo = new Todo({
    text: req.body.text
  });

  // var todo = new Todo(req.body);

  todo.save().then((doc) => {
    res.status(200).send(doc);
  }, (e) => {
    res.status(400).send(e);
  });

});

// Get Todos
app.get('/todos', (req, res) => {

  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });

});

// Get Todos by ID
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)){
    res.status(404).send(); // Id invalid
  }

  Todo.findById(id).then((todo) => {
    if(todo){
      res.send({todo}); // Todo Found
    }else {
      res.status(404).send(); // Todo Not Found
    }
  }).catch((e) => res.status(400).send()); // Other errors

});

// Delete Todos by ID
app.delete('/todos/:id', (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)){
    res.status(404).send(); // Id invalid
  }
  Todo.findByIdAndRemove(id).
  then((todo) => {
      if(todo){
        res.send({todo}); // Todo Found
      }else {
        res.status(404).send(); // Todo Not Found
      }
    }).catch((e) => res.status(400).send()); // Other errors
});

// Update Todos by ID
app.put('/todos/:id', (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)){
    res.status(404).send(); // Id invalid
  }
  Todo.findByIdAndUpdate(
    id,
    {$set: req.body},
    {
      new: true
    }).then((todo) => {
      if(todo){
        res.send({todo}); // Todo Found
      }else {
        res.status(404).send(); // Todo Not Found
      }
    }).catch((e) => res.status(400).send()); // Other errors
});


// App Listner
app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};
