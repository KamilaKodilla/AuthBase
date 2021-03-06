const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/google', /* auth/google*/
  passport.authenticate('google', { scope: ['email', 'profile'] }));

router.get('auth/google/callback', /* auth/callback */ passport.authenticate('google', { failureRedirect: '/user/no-permission' }),
  (req, res) => {
    res.redirect('/user/logged');
  }
);

router.get('/auth.logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;