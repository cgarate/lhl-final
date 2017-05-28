
exports.seed = function(knex, Promise) {
  const faker = require('faker');
  return knex('items_categories').del()
  .then( () => {
    return knex('categories').del()
    .then(function () {
      return Promise.all([

        knex('categories').insert(
          {
            name: 'Park',
            created_at: knex.raw('now()')
          }),

        knex('categories').insert(
          {
            name: 'Bar',
            created_at: knex.raw('now()')
          }),

        knex('categories').insert(
          {
            name: 'Museum',
            created_at: knex.raw('now()')
          }),

        knex('categories').insert(
          {
            name: 'Restaurant',
            created_at: knex.raw('now()')
          })
      ]);
    }, (rej) => {
      console.error(rej)
    });
  }, (rej) => {
    console.error(rej)
  })
};
