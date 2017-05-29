exports.seed = function(knex, Promise) {
  const faker = require('faker');
  return knex('users').del();
  return knex('plans').del()
    .then(function () {
      return Promise.all([
        knex('plans').insert(
          {
            name: 'Board Game',
            description: 'Sorry, monopoly, scrabble. Anything goes for this evening with board games.',
            owner_id: 7,
            avg_rating: 3,
            likes: 2,
            tod: 'Evening',
            created_at: knex.raw('now()')
          }),

        knex('plans').insert(
          {
            name: 'Picnic on the Island',
            description: 'Lunch, bicycles, a ferry ride and the view of Toronto skyline.',
            owner_id: 8,
            avg_rating: 4,
            likes: 6,
            tod: 'Afternoon',
            created_at: knex.raw('now()')
          }),

        knex('plans').insert(
          {
            name: 'Movie Night',
            description: faker.lorem.sentence(),
            owner_id: 10,
            avg_rating: 5,
            likes: 10,
            tod: 'Evening',
            created_at: knex.raw('now()')
          }),

        knex('plans').insert(
          {
            name: 'Artsy',
            description: faker.lorem.sentence(),
            owner_id: 7,
            avg_rating: 2,
            likes: 12,
            tod: 'Afternoon',
            created_at: knex.raw('now()')
          })


      ]);
    });
};
