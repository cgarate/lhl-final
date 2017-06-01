"use strict";

const express = require('express');
const router  = express.Router();
const _ = require('underscore-node');

module.exports = (knex) => {

  // Get ALL users
  router.get("/messages", (req, res) => {
    knex
      .select("*")
      .from("messages")
      .then((results) => {
        res.json(results);
    }, (rej) => {
      res.status(400).send({Error: rej})
    });
  });

  return router;
}
