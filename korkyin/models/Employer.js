const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployerSchema = new Schema({
    companyName: String,
    location: String,
    contactInfo: String,
    interestType: String,
  });
  
  module.exports = mongoose.model('Employer', EmployerSchema);
  