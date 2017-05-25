const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const init = require('./passport');

require('dotenv').config();
const ENV         = process.env.ENV || "development";
const knexConfig  = require("../knexfile");
const knex        = require("knex")(knexConfig[ENV]);

const authHelpers = require('./_helpers');

const options = {
                  usernameField: 'email'
                };

init();

passport.use(new LocalStrategy(options, (username, password, done) => {
  // check to see if the username exists
  knex('users').first('id', 'email', 'password').where('email', "=", username)
  .then((user) => {
    if (!user) return done(null, false);
    if (!authHelpers.comparePass(password, user.password)) {
      return done(null, false, {message: 'Incorrect Password'});
    } else {
      return done(null, user);
    }
  })
  .catch((err) => { return done(err); });
}));

module.exports = passport;
