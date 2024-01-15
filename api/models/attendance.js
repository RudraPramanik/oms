// models/yourModel.js
const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  // Your schema fields go here
  employeeId: { type: String, required: true },
  employeeName: { type: Number, required: true },
  date: { type: Number, required: true },
  status: { type: Number, required: true },

});

const Attendance = mongoose.model('attendance', attendanceSchema);

module.exports = Attendance;
