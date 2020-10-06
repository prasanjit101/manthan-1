const router = require('express').Router();
const Classroom = require('../models/classroom.model');

router.route('/').get((req, res) => {
  Classroom.find()
    .then(classroom => res.json(classroom))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;