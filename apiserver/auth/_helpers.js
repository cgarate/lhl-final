const bcrypt = require('bcryptjs');
const validator = require('validator');
require('dotenv').config();
const ENV         = process.env.ENV || "development";
const knexConfig  = require("../knexfile");
const knex        = require("knex")(knexConfig[ENV]);

// Function to compare password using Bcrypt.
const comparePass = ( userPassword, databasePassword) => {
    return new Promise( (resolve, reject) => {
      bcrypt.compare(userPassword, databasePassword, function (err, result) {
        if (err)
          return reject(err)
        if (!result)
          return reject('Authentication Error')

        resolve(result)
      })
    })
};

// Used for sign up process.
function createUser(req, res) {
  // check form values are correct.
  return handleErrorsSignup(req)
  
  .then(() => {
   
    // create the hash out of the password submitted by the user.
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(req.body.password, salt);
    //Insert new user into the DB.
    return knex('users')
    .insert({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      username: req.body.username,
      email: req.body.email,
      password: hash,
      created_at: new Date()
    })
    .returning('*');
  })
  // if form values were not valid send back errors and message to the client.
  .catch((err) => {
    res.status(400).json({
                          message: "Check form for errors.",
                          errors: err.errors
                        });
  });
}

function loginRequired(req, res, next) {
  if (!req.user) return res.status(401).json({message: 'Please log in'});
  return next();
}

function loginRedirect(req, res, next) {
  if (req.user) return res.status(401).json(
    {message: 'You are already logged in'});
  return next();
}

// Checks if objects are empty.
function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

// Validate signup form values.
function handleErrorsSignup(req) {
  return new Promise((resolve, reject) => {
    let errors = {};
    // Check if the email is not already in the database
    knex('users').first('email').where('email', "=", req.body.email)
    // if email exists reject.
    .then( (email) => {
      if (email) {
          errors.email =  'Email already exists.'
      }

      if (req.body.username.length < 1) {
        errors.username = 'Username cannot be empty.'
      }

      if (typeof req.body.email !== 'string' || !validator.isEmail(req.body.email)) {
        errors.email = 'Please enter a valid email.'
      }

      if (req.body.password.length < 8) {
        errors.password = 'Password must be at least 8 characters long.'
      }

      if (req.body.first_name.length < 1) {
        errors.first_name = 'First Name cannot be empty.'
      }

      if (req.body.last_name.length < 1) {
        errors.last_name = 'Last Name cannot be empty'
      }

      if(isEmpty(errors)) {
          resolve(errors);
      } else {
          reject({errors})
      }

    })
    // Query to check for email failed.
    .catch((err) => { return done(err); });
  });
}

//validate login form.
function handleErrorsLogin(req) {
  let errors = {};
  return new Promise((resolve, reject) => {
    if (typeof req.body.password !== 'string' || req.body.password.trim().length === 0) {
      errors.password = "Please enter your password";
    }

    if (typeof req.body.email !== 'string' || req.body.email.trim().length === 0 || !validator.isEmail(req.body.email)) {
      errors.email =  "Please enter your email";
    }

    if(isEmpty(errors)) {
        resolve(errors);
    } else {
        reject({errors})
    }

  });
}

module.exports = {
  comparePass,
  createUser,
  loginRequired,
  loginRedirect,
  handleErrorsLogin
};
