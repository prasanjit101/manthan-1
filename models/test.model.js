const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const testSchema = new Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  marks: { type: Number, required: true },
  questions: { type: Array, required: true },
  rules: { type: Array, required: true },
  scores: { type: Array, required: true },
  duration: { type: Array, required: true },
});

const Test = mongoose.model('Test', testSchema);

module.exports = Test;