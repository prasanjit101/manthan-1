const router = require('express').Router();
let Test = require('../models/test.model');

router.route('/').get((req, res) => {

  Test.find()
    .then(test => res.json(test))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {

    const name = req.body.name;
    const date = req.body.date;
    const duration = req.body.duration;
    const marks = req.body.marks;
    const questions = req.body.questions;
    const rules = req.body.rules;
    const scores = req.body.scores;
  
    const newTest = new Test({
      name,
      date,
      duration,
      marks,
      questions,
      rules,
      scores
    });
  
    newTest.save()
    .then(() => res.json('Test added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/delete').post((req,res) => {

    const query = {
        "_id":req.body._id
    };

    Test.deleteOne(query)
    .then(() => res.json('Test delete!'))
    .catch(err => res.status(400).json('Error: ' + err));
    });


module.exports = router; 