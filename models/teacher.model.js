const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const teacherSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  classrooms: { type: Array, required: true }
});

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;