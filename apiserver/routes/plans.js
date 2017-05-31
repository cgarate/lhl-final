
"use strict";

const express = require('express');
const router  = express.Router();
const _ = require('underscore-node');
const bodyParser  = require("body-parser");

module.exports = (knex) => {

  // Get ALL plans
  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("plans")
      .then((results) => {
        res.json(results);
    }, (rej) => {
      res.sendStatus(400)
    });
  });

  //Get Items for a Plan
  router.get("/plan_item/:id", (req, res) => {
    knex
      .select('item_id', 'plan_id', 'description')
      .where('plan_id', "=", req.params.id)
      .from("plans_items")
      .then( (results) => {
        return _.pluck(results, 'item_id')
      })
      .then( (items) => {
        return knex
        .select(["items.*", "plans_items.description"])
        .from("items")
        .leftJoin("plans_items", "items.id", "=", "plans_items.item_id")
        .whereIn("items.id", items)
        .andWhere("plans_items.plan_id", req.params.id);
      })
      .then( (results) => {
        res.json(results)
      })
      .catch( (error) => {
        console.error(error);
        res.sendStatus(500);
      });
  });

  // insert plans.
  router.post("/", (req, res) => {
    //add json parse
    knex("plans")
      .returning('id')
      .insert({
        name: req.body.name,
        description: req.body.description,
        owner_id: req.body.owner_id,
        avg_rating: req.body.avg_rating,
        likes: req.body.likes,
        tod: req.body.tod
      }).then( (results) => {
          //console.log("Response: ", res);
          res.json(results);
      }, (rej) => {
        res.sendStatus(500);
      });
    });

    //Insert new plan, its items (3 tables)
    router.post("/plan_items/", (req, res) => {
      console.log("req", req.body);
      var newPlanId;
      
      knex("plans")
        .returning('id')
        .insert({
          name: req.body.plans.name,
          description: req.body.plans.description,
          owner_id: req.body.plans.owner_id,
          tod: req.body.plans.tod,
          avg_rating: 0,
          likes: 0
        })
        .then( (results) => {
          console.log("here2");
          let planID = JSON.parse(results);
          newPlanId = planID;
          knex.batchInsert("items", req.body.items)
          .returning('id')
          .then( (ids) => {
            let plans_items = [];
            ids.forEach( (v, i) => {
              plans_items.push({plan_id: planID, item_id: v})
            })
            knex.batchInsert("plans_items", plans_items)
            .returning('id')
            .then( (id) => {
              res.json(newPlanId);
            }, (reject) => {
              console.error("Something went wrong after inserting plans_items. ", reject);
            })
          }, (reject) => {
            console.error("Something went wrong after inserting items. ", reject)
          })// reject/then
        }, (reject) => {
          console.error("Something went wrong after inserting plans. ", reject)
        })
    })

    // insert plans/items.
    router.post("/plan_item/", (req, res) => {
      knex("plans_items")
        .returning('id')
        .insert({
          plan_id: req.body.plan_id,
          description: req.body.description,
          item_id: req.body.item_id,
        }).then( (results) => {
            res.sendStatus(200);
        }, (rej) => {
          res.sendStatus(500);
        });
      });

    // Update plans.
    router.put("/update/", (req, res) => {
      knex("plans")
      .where({
        id: req.body.id
      })
      .update({
        name: req.body.name,
        description: req.body.description,
        owner_id: req.body.owner_id,
        avg_rating: req.body.avg_rating,
        likes: req.body.likes,
        tod: req.body.tod
      })
      .then( (results) => {
        res.sendStatus(200)
      }, (rej) => {
        res.sendStatus(400)
      })
    });

    // get plans through its ID. Returns JSON.
    router.get("/:id", (req, res) => {
      console.log(req.params)
      knex
        .select("*")
        .where('id', "=", req.params.id)
        .from("plans")
        .then( (results) => {
          res.json(results);
        }, (rej) => {
          res.sendStatus(400)
        });
    });

    // get plans belonging to a user ID. Returns JSON.
    router.get("/plan_user/:id", (req, res) => {
      console.log(req.params)
      knex
        .select("*")
        .where('owner_id', "=", req.params.id)
        .from("plans")
        .then( (results) => {
          res.json(results);
        }, (rej) => {
          res.sendStatus(400)
        });
    });


return router;
}
