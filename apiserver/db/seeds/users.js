exports.seed = function(knex, Promise) {
  const faker = require('faker');
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert([{created_at: knex.raw('now()'), archived: 1, first_name: faker.name.firstName(), last_name: faker.name.lastName(), password: faker.internet.password(), username: faker.internet.userName(), email: faker.internet.email(), dob: faker.date.past() }]),
        knex('users').insert([{created_at: knex.raw('now()'), archived: 0, first_name: faker.name.firstName(), last_name: faker.name.lastName(), password: faker.internet.password(), username: faker.internet.userName(), email: faker.internet.email(), dob: faker.date.past() }]),
        knex('users').insert([{created_at: knex.raw('now()'), archived: 0, first_name: faker.name.firstName(), last_name: faker.name.lastName(), password: faker.internet.password(), username: faker.internet.userName(), email: faker.internet.email(), dob: faker.date.past() }]),
        knex('users').insert([{created_at: knex.raw('now()'), archived: 0, first_name: faker.name.firstName(), last_name: faker.name.lastName(), password: faker.internet.password(), username: faker.internet.userName(), email: faker.internet.email(), dob: faker.date.past() }]),
      ]);
    });
};
