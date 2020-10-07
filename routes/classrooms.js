const router = require('express').Router();
const Classroom = require('../models/classroom.model');

router.route('/').get((req, res) => {
  Classroom.find()
    .then(classroom => res.json(classroom))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const code = req.body.code;
    const instructor = req.body.instructor;
    const tests = req.body.tests;
  
    const newClassroom = new Classroom({
      name,
      code,
      instructor,
      tests
    });
  
    newClassroom.save()
    .then(() => res.json('Classroom added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/delete').post((req,res) => {

    const query = {
        "code":req.body.code,
        "instructor":req.body.instructor
    };

    Classroom.deleteOne(query)
    .then(() => res.json('Classroom delete!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Classroom.findById(req.params.id)
      .then(classroom => res.json(classroom))
      .catch(err => res.status(400).json('Error: ' + err));
});
        

module.exports = router;