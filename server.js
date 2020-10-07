const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://Manthan:ZaGb8aqD5N08YfG5@cluster0.miapi.mongodb.net/manthan?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const classroomsRouter = require('./routes/classrooms');
const studentsRouter = require('./routes/students');
const teachersRouter = require('./routes/teachers');
const testsRouter = require('./routes/tests');

app.use('/classrooms', classroomsRouter);
app.use('/students', studentsRouter);
app.use('/teachers', teachersRouter);
app.use('/tests', testsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
