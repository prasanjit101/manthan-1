const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  rollno: { type: String, required: true },
  classroom: { type: Array, required: true },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;