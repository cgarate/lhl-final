const bcrypt = require('bcryptjs');
require('dotenv').config();
const ENV         = process.env.ENV || "development";
const knexConfig  = require("../knexfile");
const knex        = require("knex")(knexConfig[ENV]);


function comparePass(userPassword, databasePassword) {
  console.log("Userpassword: ", userPassword);
  console.log("databasepassword: ", databasePassword);
  return bcrypt.compareSync(userPassword, databasePassword);
}

function createUser(req, res) {
  return handleErrors(req)
  .then(() => {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(req.body.password, salt);
    return knex('users')
    .insert({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      username: req.body.username,
      email: req.body.email,
      password: hash
    })
    .returning('*');
  })
  .catch((err) => {
    res.status(400).json({status: err.message});
  });
}

function loginRequired(req, res, next) {
  if (!req.user) return res.status(401).json({status: 'Please log in'});
  return next();
}

function loginRedirect(req, res, next) {
  if (req.user) return res.status(401).json(
    {status: 'You are already logged in'});
  return next();
}

function handleErrors(req) {
  return new Promise((resolve, reject) => {
    if (req.body.username.length < 6) {
      reject({
        message: 'Username must be longer than 6 characters'
      });
    }
    else if (req.body.password.length < 6) {
      reject({
        message: 'Password must be longer than 6 characters'
      });
    } else {
      resolve();
    }
  });
}

module.exports = {
  comparePass,
  createUser,
  loginRequired,
  loginRedirect
};
