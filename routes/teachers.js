const router = require('express').Router();
let Teacher = require('../models/teacher.model');

router.route('/').get((req, res) => {
  Teacher.find()
    .then(teacher => res.json(teacher))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const classrooms = req.body.classrooms;
  
    const newTeacher = new Teacher({
      username,
      email,
      classrooms
    });
  
    newTeacher.save()
    .then(() => res.json('Teacher added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;