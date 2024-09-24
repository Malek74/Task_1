
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//this is the schema of the user to be stored in the database
const userSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true
  },
  Age: {
    type: Number,
    required: true,
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;