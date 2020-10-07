const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const classroomSchema = new Schema({
  name: { type: String, required: true },
  code: { type: String, required: true },
  instructor: { type: String, required: true },
  tests: { type: Array, required: true },
});

const Classroom = mongoose.model('Classroom', classroomSchema);

module.exports = Classroom;