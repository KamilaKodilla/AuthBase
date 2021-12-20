const express = require('express');
const router = express.Router();

const isLogged = (req, res, next) => {
  if(!req.user){
    res.redirect('/user/no-permission');
  } else {
    next();
  }
};

router.get('/logged', isLogged, (req, res) => {
res.render('logged', {user: req.user.displayName, image: req.user.photos[0].value});
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/profile', isLogged, (req, res) =>{
  res.render('userProfile', {username: req.user.displayName})
});

router.get('/profile/settings', isLogged, (req, res) =>{
  res.render('profileSettings', {username: req.user.displayName})
});


module.exports = router;