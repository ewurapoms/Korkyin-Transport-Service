const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  age: Number,
  gender: String,
  email: { type: String, unique: true },
  education: String,
  interest: String,
  paymentType: String,
});

module.exports = mongoose.model('User', UserSchema);
