const router = require('express').Router();
let Student = require('../models/student.model');

router.route('/').get((req, res) => {
  Student.find()
    .then(student => res.json(student))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const rollno = req.body.rollno;
    const classrooms = req.body.classrooms;
  
    const newStudent = new Student({
      username,
      email,
      rollno,
      classrooms
    });
  
    newStudent.save()
    .then(() => res.json('Student added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;