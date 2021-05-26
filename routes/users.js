const express = require('express');
const router = express.Router();
const User = require('../models/user')
const passport = require('passport')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', (req, res, next) => {
  User.register(
    new User({ username: req.body.username }),
    req.body.password,
    err => {
      if(err){
        res.statusCode = 500
        res.setHeader('Content-Type', 'application/json')
        res.json({ err: err })
      } else {
        passport.authenticate('local')(req, res, () => {
            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            res.json({ success: true, status: 'registration successful'})
        })
      }
    }
  )
})
router.get('/logout', (req, res, next) => {
  if (req.session) {
      req.session.destroy();
      res.clearCookie('session-id');
      res.redirect('/');
  } else {
      const err = new Error('You are not logged in!');
      err.status = 401;
      return next(err);
  }
});

router.post('/login', passport.authenticate('local'), (req, res, ) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.json({ success: true, status: 'you are successfully logged in'})
})





module.exports = router;
