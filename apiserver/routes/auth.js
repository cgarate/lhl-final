const express = require('express');
const router = express.Router();

const authHelpers = require('../auth/_helpers');
const passport = require('../auth/local');

router.post('/signup', authHelpers.loginRedirect, (req, res, next)  => {
  return authHelpers.createUser(req, res)
  .then((response) => {
    passport.authenticate('local', (err, user, info) => {
      if (user) {res.status(200).json({
                                message: "You have successfully signed up! Now you should be able to log in.",
                                success: true,
                              });
                }
    })(req, res, next);
  })
  .catch((err) => { handleResponse(res, 500, 'error'); });
});

router.post('/login', authHelpers.loginRedirect, (req, res, next) => {
  return authHelpers.handleErrorsLogin(req)
  .then( (errors) => {
    passport.authenticate('local', {badRequestMessage: 'Bad Request Error!'}, (err, token, user) => {
      if (err) { handleResponse(res, 500, 'An error occurred.'); }
      if (!user) { handleResponse(res, 404, 'User not found.'); }
      if (user) {
          res.status(200).json({
                                  message: "You have succesfully logged in!",
                                  success: true,
                                  token,
                                  userData: user
                                });
      }
    })(req, res, next);

  }, (err) => {
    res.status(400).json({
                            message: "Check the form for errors.",
                            success: false,
                            errors: err.errors
                          });
  })
  .catch( (err) => { handleResponse(res, 500, 'An Error occurred.'); })
});

router.get('/logout', authHelpers.loginRequired, (req, res, next) => {
  req.logout();
  handleResponse(res, 200, 'success');
});

function handleResponse(res, code, statusMsg) {
  res.status(code).json({
                          message: statusMsg,
                        });
}

module.exports = router;
