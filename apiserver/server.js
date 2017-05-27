"use strict";

require('dotenv').config();

const ENV         = process.env.ENV || "development";
const express     = require("express");
const cors        = require('cors')
const bodyParser  = require("body-parser");
const methodOverride = require('method-override')
//const sass        = require("node-sass-middleware");
const app         = express();

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');
const partials    = require('express-partials');

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");
const itemsRoutes = require("./routes/items");
const plansRoutes = require("./routes/plans");
const categoriesRoutes = require("./routes/categories");
const authRoutes = require('./routes/auth');
//const apiRoutes = require('./routes/api');

app.set('port', (process.env.PORT || 8080));
app.use(partials());

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Cors allows for cross domain communication
// Currently it's set without restrictions for demo purposes
// Before creating a production/live version this must be restricted for specific routes
app.use(cors());

app.use(methodOverride('_method'))

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
// app.use("/styles", sass({
//   src: __dirname + "/styles",
//   dest: __dirname + "/public/styles",
//   debug: true,
//   outputStyle: 'expanded'
// }));

app.use(express.static("public"));

// Mount all resource routes
app.use("/api/users", usersRoutes(knex));
app.use("/api/items", itemsRoutes(knex));
app.use("/api/plans", plansRoutes(knex));
app.use("/api/categories", categoriesRoutes(knex));

app.use('/auth', authRoutes(knex));
//app.use('/api', apiRoutes);

// Home page
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
