"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  // Get ALL users
  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("users")
      .then((results) => {
        res.json(results);
    }, (rej) => {
      res.status(400).send({Error: rej})
    });
  });

  // Gets active users
  router.get("/active/", (req, res) => {
    knex
      .select("*")
      .where('archived', "=", 0)
      .from("users")
      .then((results) => {
        res.json(results);
    }, (rej) => {
      res.status(400).send({Error: rej})
    });
  });

  // Gets inactive users
  router.get("/inactive/", (req, res) => {
    knex
      .select("*")
      .where('archived', "=", 1)
      .from("users")
      .then((results) => {
        res.json(results);
    }, (rej) => {
      res.sendStatus(400)
    });
  });

  // insert a user.
  router.post("/", (req, res) => {
    knex("users")
      .returning('*')
      .insert({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        dob: req.body.dob,
        archived: 0
      }).then( (results) => {
          res.sendStatus(200);
      }, (rej) => {
        res.sendStatus(500);
      });
    });

    // "Delete" a user.
    router.delete("/", (req, res) => {
      knex("users")
      .where({
        id: req.body.id
      })
      .update({
        archived: 1,
      })
      .then( (results) => {
        res.sendStatus(200);
      }, (rej) => {
        res.sendStatus(400);
      })
    });

    // Update a user.
    router.put("/update/", (req, res) => {
      knex("users")
      .where({
        id: req.body.id
      })
      .update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        dob: req.body.dob,
        archived: req.body.archived
      })
      .then( (results) => {
        res.sendStatus(200)
      }, (rej) => {
        res.sendStatus(400)
      })
    });

    // get a user through its ID. Returns JSON.
    router.get("/:id", (req, res) => {
      console.log(req.params)
      knex
        .select("*")
        .where('id', "=", req.params.id)
        .from("users")
        .then( (results) => {
          res.json(results);
        }, (rej) => {
          res.sendStatus(400)
        });
    });

  return router;
}
