var express = require('express');
var router = express.Router();
var config = require('../config');

router.post('/createTask', function(req, res, next) {
  req.checkBody('title', 'Empty task name').notEmpty();
  var errors = req.validationErrors();

  if (errors) {
      res.render('index', {
        title: 'Node Video Collaboration',
        taskTitle: req.body.title,
        errorMessages: errors
      });
  }
  else {

    var newTask = new Task({
      title: req.body.title,
      owner: req.user._id
    });

    newTask.save(function(err, data) {
      if (err) {
        console.log(err);
        res.render('error');
      }
      else {
        res.redirect('/task/' + data._id);
      }
    });
  }
});

router.get('/task/:id', function(req, res, next) {
  if (req.params.id) {
    Task.findOne({ _id: req.params.id }, function(err, data) {
      if (err) {
        console.log(err);
        res.render('error');
      }

      if (data) {
        res.render('task', {
          data: data,
          roomId: data.id,
          base: config.base,
          peerServer:  config.peerServer
        });
      }
      else {
        res.render('error');
      }
    });
  }

  else {
    res.render('error');
  }
});

module.exports = router;
