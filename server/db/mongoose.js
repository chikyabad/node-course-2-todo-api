// https://mongoosejs.com/docs/validation.html Validators
// https://mongoosejs.com/docs/guide.html Schemas

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
};
