"use strict";

require('dotenv').config();

const ENV         = process.env.ENV || "development";
const express     = require("express");
const session     = require("express-session")
const app         = express();
const cors        = require('cors')
const bodyParser  = require("body-parser");
const methodOverride = require('method-override');
const passport    = require("passport");
const flash       = require("connect-flash");
const cookieParser = require('cookie-parser');
//const sass        = require("node-sass-middleware");

// Database middleware
const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);

// Loggers
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

//View middleware
const partials = require('express-partials');

const fileUpload = require('express-fileupload');

// Separated Routes for each Resource
const usersRoutes = require("./routes/users");
const itemsRoutes = require("./routes/items");
const plansRoutes = require("./routes/plans");
const categoriesRoutes = require("./routes/categories");
const eventsRoutes = require("./routes/events");
const authRoutes = require('./routes/auth');
//const apiRoutes = require('./routes/api');

app.set('port', (process.env.PORT || 8080));
app.use(partials());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Vary", "Origin");
  res.header("Access-Control-Allow-Credentials", "true")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(cookieParser());
// app.use(session({
//   secret: process.env.SECRET_KEY,
//   resave: false,
//   saveUninitialized: true
// }));

app.use(passport.initialize());
// app.use(passport.session());
app.use(flash());


// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Cors allows for cross domain communication
// Currently it's set without restrictions for demo purposes
// Before creating a production/live version this must be restricted for specific routes
//app.use(cors());

app.use(methodOverride('_method'))

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit:'5mb' }));

app.use(express.static("/public"));

// fileupload route
app.use(fileUpload());
app.post('/upload', function(req, res) {

console.log("whatIMage: ", req.files.imageFile);
  if(req.files.imageFile) {
    if (!req.files) {
      return res.status(400).send('No files were uploaded.');
    }

    // The name of the input field (i.e. "imageFile") is used to retrieve the uploaded file
    let imageFile = req.files.imageFile;
    let userImageNewFilenamePath = "public/img/" + req.files.imageFile.name;
    // Use the mv() method to place the file somewhere on your server
    imageFile.mv(userImageNewFilenamePath, function(err) {
      if (err)
        return res.status(500).send(err);

      // res.send('File uploaded!');
      res.redirect(req.get('referer'));
    });
  }
});

// Mount all resource routes
app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes(knex));
app.use("/api/items", itemsRoutes(knex));
app.use("/api/plans", plansRoutes(knex));
app.use("/api/categories", categoriesRoutes(knex));
app.use("/api/events", eventsRoutes(knex));

// Home page
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
