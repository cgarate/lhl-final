
"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  // Get ALL categories
  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("categories")
      .then((results) => {
        res.json(results);
    }, (rej) => {
      res.sendStatus(400)
    });
  });

  // insert categories.
  router.post("/", (req, res) => {
    knex("categories")
      .returning('*')
      .insert({
        name: req.body.name
      }).then( (results) => {
          //console.log("Response: ", res);
          res.sendStatus(200);
      }, (rej) => {
        res.sendStatus(500);
      });
    });

    // Update categories.
    router.put("/update/", (req, res) => {
      knex("categories")
      .where({
        id: req.body.id
      })
      .update({
        name: req.body.name
      })
      .then( (results) => {
        res.sendStatus(200)
      }, (rej) => {
        res.sendStatus(400)
      })
    });

    // get categories through its ID. Returns JSON.
    router.get("/:id", (req, res) => {
      console.log(req.params)
      knex
        .select("*")
        .where('id', "=", req.params.id)
        .from("categories")
        .then( (results) => {
          res.json(results);
        }, (rej) => {
          res.sendStatus(400)
        });
    });

return router;
}
