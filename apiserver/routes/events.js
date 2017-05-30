"use strict";

const express = require('express');
const router  = express.Router();
const _ = require('underscore-node');

module.exports = (knex) => {

  // Get ALL events
  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("events")
      .then((results) => {
        res.json(results);
    }, (rej) => {
      res.status(400).send({Error: rej})
    });
  });

  //Insert an event and record in events_users
  router.post("/event_user", (req, res) => {
    let created = new Date();
    knex("events")
      .returning('id')
      .insert({
        date: req.body.date,
        created_at: created,
        plan_id: req.body.plan_id,
        name: req.body.name
      })
      .then( (results) => {
        let eventID = JSON.parse(results);

        knex("events_users")
          .returning('id')
          .insert({
            event_id: eventID,
            user_id: req.body.userid,
          }).then( (results) => {
              res.sendStatus(200);
          }, (rej) => {
            res.sendStatus(500);
          });

      }, (reject) => {
        console.error("Something went wrong after inserting plans. ", reject)
      })
  })

  //Get Users_Events
  router.get("/event_user/:id", (req, res) => {
    knex
      .select('event_id')
      .where('user_id', "=", req.params.id)
      .from("events_users")
      .then( (results) => {
        return _.pluck(results, 'event_id')
      })
      .then( (events) => {
        return knex
        .select(["events.date", "events.name as eventName", "plans.*"])
        .from("events")
        .innerJoin("plans", "events.plan_id", "=", "plans.id")
        .whereIn("events.id", events)
      })
      .then( (results) => {
        res.json(results)
      })
      .catch( (error) => {
        console.error(error);
        res.sendStatus(500);
      });
  });

  return router;
}
