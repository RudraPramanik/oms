// models/yourModel.js
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  // Your schema fields go here
  employeeId:{type:String,required:true,uniqui:true},
  employeeName: { type: String, required: true },
  designation: { type: String, required: true },
  joiningDate:{ type:String, required:true},
  dateOfBirth:{ type:String, required:true},
  salary:{ type:String, require: true},
  activeEmployee:{ type: Boolean, required: true},
  phoneNumber:{ type: String, require: true},
  address:{type: String, require: true},
  createdAt: { type: Date, default: Date.now()},

});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee
