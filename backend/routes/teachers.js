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

router.route('/delete').post((req,res) => {

    const query = {
        "email":req.body.email
    };

    Teacher.deleteOne(query)
    .then(() => res.json('Teacher delete!'))
    .catch(err => res.status(400).json('Error: ' + err));
    });
    
router.route('/user').get((req,res) => {
    const email = req.body.email;

    Teacher.findOne({"email":email})
    .then(user => {
        res.json(user)
    })
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;