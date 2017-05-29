const passport = require('passport');
const jwt = require('jsonwebtoken');
const LocalStrategy = require('passport-local').Strategy;

const init = require('./passport');

require('dotenv').config();
const ENV         = process.env.ENV || "development";
const knexConfig  = require("../knexfile");
const knex        = require("knex")(knexConfig[ENV]);

const authHelpers = require('./_helpers');

// Passport options. User email instead of username. No session and pass the Request
// to the cb.
const options = {
  usernameField: 'email',
  session: false,
  passReqToCallback: true
}

//initialize passport.js
init();

passport.use(new LocalStrategy(options, (req, email, password, done) => {
  // check if the user exists in the database
  knex('users').first('id', 'first_name', 'email', 'password').where('email', "=", email)
  .then( (user) => {
      // If user doesn't exist in the DB return null for error and false for user.
      if (!user) return done(null, false);

      // If user exists then check password is valid.
      authHelpers.comparePass(password, user.password)

      // If password is valid, proceed to create a JWT
      .then( (result) => {
        const payload = {
          sub: user._id
        };
        // create a token string
        const token = jwt.sign(payload, process.env.SECRET_KEY);
        const data = {
          name: user.first_name,
          email: user.email,
          uid: user.id
        };
        // return the user data and token to the client.
        return done(null, token, data);
      // promise was rejected, password didn't match.
      }, (err) => {
        done(err, false)
      })
    }, (err) => {
      console.error("Authentication Error", err)
      done(err, false)
    })
    .catch((err) => { return done(err); });
}));

module.exports = passport;
