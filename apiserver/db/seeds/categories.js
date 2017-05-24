
exports.seed = function(knex, Promise) {
  const faker = require('faker');
  return knex('items_categories').del();
  return knex('categories').del()
    .then(function () {
      return Promise.all([
        knex('categories').insert(
          {
            name: 'Restaurant'
          }),

        knex('categories').insert(
          {
            name: 'Music Venue'
          }),

        knex('categories').insert(
          {
            name: 'Bar'
          }),

        knex('categories').insert(
          {
            name: 'Landmark'
          })
      ]);
    });
};
