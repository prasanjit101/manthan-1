const router = require('express').Router();
let Teacher = require('../models/teacher.model');

router.route('/').get((req, res) => {

  Teacher.find()
    .then(teacher => res.json(teacher))
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;