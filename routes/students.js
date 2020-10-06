const router = require('express').Router();
let Student = require('../models/student.model');

router.route('/').get((req, res) => {
  Student.find()
    .then(student => res.json(student))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;