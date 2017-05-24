"use strict";

const express = require('express');
const router  = express.Router();
const _ = require('underscore-node');

module.exports = (knex) => {

  // Get ALL users
  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("items")
      .then((results) => {
        res.json(results);
    }, (rej) => {
      res.sendStatus(400)
    });
  });

  //Get Categories for an Item
  router.get("/item_category/:id", (req, res) => {
    knex
      .select('category_id')
      .where('item_id', "=", req.params.id)
      .from("items_categories")
      .then( (results) => {
        return _.pluck(results, 'category_id')
      })
      .then( (cats) => {
        return knex.select('name').from('categories').whereIn('id', cats);
      })
      .then( (results) => {
        res.json(results)
      })
      .catch( (error) => {
        console.error(error);
        res.sendStatus(500);
      });
  });


  // insert an item.
  // Items are linked in a many to many relationship to categories.
  // We first insert the item, then we get its new ID, then we check if
  // categories were selected. If so we loop the values and create an array of key/value objects
  // to insert in items_categories (item_id, category_id)
  router.post("/", (req, res) => {
    knex("items")
      .returning('id')
      .insert({
        name: req.body.name,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        phone: req.body.phone,
        street_address: req.body.street_address,
        city: req.body.city,
        postal_code: req.body.postal_code,
        province: req.body.province,
        country: req.body.country,
        hours: req.body.hours,
        website: req.body.website
      }).then( (id) => {
        let incomingArray = JSON.parse(req.body.category);
        id = JSON.parse(id);
        if (incomingArray.length > 0) {

          let catID = "";
          let arrayInsert = [];
          for (let i = 0; i < incomingArray.length; i++) {

            let insert = {};
            catID = incomingArray[i];
            insert.item_id = id;
            insert.category_id = catID
            arrayInsert.push(insert);

          } // end for
          return arrayInsert;

        } //end if
      }).then ( (arrayInsert) => {
        return knex("items_categories")
        .insert(arrayInsert)
      }).then( (results) => {
          res.sendStatus(200);
      }, (rej) => {
        console.log("Error: ", rej)
        res.sendStatus(500);
      });
    });

    // Update an item.
    router.put("/update/", (req, res) => {
      knex("items")
      .returning('id')
      .where({
        id: req.body.id
      })
      .update({
        name: req.body.name,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        phone: req.body.phone,
        street_address: req.body.street_address,
        city: req.body.city,
        postal_code: req.body.postal_code,
        province: req.body.province,
        country: req.body.country,
        hours: req.body.hours,
        website: req.body.website
      })
      .then( (results) => {
        res.sendStatus(200)
      }, (rej) => {
        res.sendStatus(400)
      })
    });

    // get an item through its ID. Returns JSON.
    router.get("/:id", (req, res) => {
      console.log(req.params)
      knex
        .select("*")
        .where('id', "=", req.params.id)
        .from("items")
        .then( (results) => {
          res.json(results);
        }, (rej) => {
          res.sendStatus(400)
        });
    });

return router;
}
