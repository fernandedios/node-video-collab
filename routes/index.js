var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Node Video Collaboration' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Node Video Collaboration' });
});

router.route('/contact')
  .get(function(req, res, next) {
    res.render('contact', { title: 'Contact Us' });
  })
  .post(function(req, res, next) {
    req.checkBody('name', 'Empty name').notEmpty();
    req.checkBody('email', 'Invalid email').isEmail();
    req.checkBody('name', 'Empty message').notEmpty();
    var errors = req.validationErrors();

    // if there are validation errors
    if (errors) {
      res.render('contact', {
        title: 'Contact Us',
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
        errorMessages: errors
      });
    }

    else {
        res.render('thanks', { title: 'Thank you!' });
    }
  });



module.exports = router;
